import { GameCanvas } from './components/GameCanvas';

export default function Home() {
  return (
    <main>
      <GameCanvas core="nestopia" rom="/roms/nes/Micro Mages (US).nes" />
    </main>
  );
}
