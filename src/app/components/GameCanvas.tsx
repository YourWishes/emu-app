"use client";
import { useEffect, useRef, useState } from "react";

const FS_ROM_DIR = '/rom';
const FS_ROM_PATH = `${FS_ROM_DIR}/rom.nes`;

export type GameCanvasParams = {
  core: 'nestopia';
  rom: string;
};

export type GameCanvasModule = EmscriptenModule & {
  callMain: (args: string[]) => void;
  setCanvasSize: (width: number, height: number) => void;
}

const mkdirp = (path: string) => {
  const parts = path.split('/');
  let current = '/';
  for(let i=0; i<parts.length; i++) {
    current += parts[i];
    try {
      FS.mkdir(current);
    } catch(e) {
      console.warn(e);
    }
    current += '/';
  }
}

export const GameCanvas = (params:GameCanvasParams) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [ hasUserInteracted, setHasUserInteracted ] = useState(false);

  const updateCanvas = () => {
    if(!document || !document.body) return;
    if(!hasUserInteracted) return;

    if(!canvasRef.current) {
      console.log('init canvas');
      canvasRef.current = document.createElement("canvas");
      canvasRef.current.width = 640;
      canvasRef.current.height = 480;
      canvasRef.current.id = 'canvas';// Fixes SDL2 bug
      canvasRef.current.style.background = 'black';
      canvasRef.current.style.display = 'none';
      canvasRef.current.addEventListener("contextmenu", function(e) {
        e.preventDefault();
      }, false);

      document.body.appendChild(canvasRef.current);
    } else if(canvasContainerRef.current) {
      canvasRef.current.style.display = 'block';
      canvasContainerRef.current.appendChild(canvasRef.current);
    }

    if(canvasRef.current && !scriptRef.current) {
      // Setup WASM args.
      const args = {
        noInitialRun: true,
        canvas: canvasRef.current,
        arguments: [
          FS_ROM_PATH,
          "--verbose"
        ],
        onRuntimeInitialized: async () => {
          try {
            console.log('WASM Ready');

            // ROM
            console.log('Loading ROM...');
            const romRes = await fetch(params.rom);
            mkdirp(FS_ROM_DIR);
            FS.writeFile(
              FS_ROM_PATH,
              new Uint8Array(await romRes.arrayBuffer())
            );

            // Config
            console.log('Loading config...');
            const configRes = await fetch('/retroarch.cfg');
            let path = '/home/web_user/retroarch/userdata';
            mkdirp(path);
            FS.writeFile(
              '/home/web_user/retroarch/userdata/retroarch.cfg',
              new Uint8Array(await configRes.arrayBuffer())
            );

            Module.callMain(Module.arguments);
            await new Promise(r => setTimeout(r, 100));
            Module.setCanvasSize(640, 480);

            // Hackery
            //@ts-ignore
            (globalThis||global).reloadConfig = async () => {
              try {
                const configRes = await fetch('/retroarch.cfg');
                let path = '/home/web_user/retroarch/userdata';
                mkdirp(path);
                FS.writeFile(
                  '/home/web_user/retroarch/userdata/retroarch.cfg',
                  new Uint8Array(await configRes.arrayBuffer())
                );
                // @ts-ignore
                Module._cmd_reload_config();
              } catch(e) {
                console.error(e);
              }
            }
          } catch(e) {
            console.error('Error during runtime init!!');
            console.error(e);
          }
        },
        print: (text: string) => {
          console.log(text);
        },
        printErr: (text: string) => {
          console.error(text);
        }
      }

      const Module:GameCanvasModule = (
        // @ts-ignore
        (globalThis||global).Module = (globalThis||global).Module || {}
      );
      Object.assign(Module, args);

      // Load script
      scriptRef.current = document.createElement("script");
      scriptRef.current.src = `/cores/${params.core}_libretro.js`;
      scriptRef.current.type = "text/javascript";
      scriptRef.current.async = true;
      document.body.appendChild(scriptRef.current);
    }
  };

  const onUserInteract = () => {
    setHasUserInteracted(true);
    updateCanvas();
  }

  useEffect(() => {
    document.addEventListener('click', onUserInteract);
    updateCanvas();

    return () => {
      document.removeEventListener('click', onUserInteract);

      if(scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      if(canvasRef.current) {
        document.body.removeChild(canvasRef.current);
        canvasRef.current = null;
      }

      try {
        // @ts-ignore
        ((globalThis||global).Module||{}).pauseMainLoop();
      } catch(e) {
        console.warn(e);
      }
    }
  });

  useEffect(() => {
    updateCanvas();
  }, [ canvasContainerRef.current ]);

  return (
    <div>
      Has user clicked? {hasUserInteracted ? 'yes' : 'no'}
      <div ref={canvasContainerRef} />
    </div>
  );
}