import { GameCanvas } from './components/GameCanvas';
import { RAConfigGet } from './utils/RAConfig';

export default function Home() {
  return (
    <main>
      <GameCanvas
        core="nestopia"
        rom="/roms/nes/Micro Mages (US).nes"
        config={RAConfigGet({
          core: 'nestopia',
          menu: true,
          fps: true,
          mute: true
        })}
      />
    </main>
  );
}
