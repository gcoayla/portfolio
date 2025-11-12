import { Typography } from "@/components/ui/Typography";
import skullcandyMock from "@/assets/mock.png";
import TechnologyIcon from "@/components/ui/TechnologyIcon";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { SoundWave } from "./SoundWave";

export const Skullcandy = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-8">
      <SoundWave />
      <div className="w-[90%] md:w-[50%] flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <Typography variant="h1" className="text-white">
            Skullcandy Skull-HQ
          </Typography>
          <Typography variant="h5" className="text-white">
            A complete UI and UX overhaul for a flagship desktop gaming app,
            creating a polished, modern front-end and enabling deep hardware
            integration.
          </Typography>
        </div>
        <div className="flex flex-col gap-6">
          <Typography variant="h5" className="text-white">
            Technologies:
          </Typography>
          <div className="flex gap-4 flex-wrap">
            <TechnologyIcon technology="React" />
            <TechnologyIcon technology="TypeScript" />
            <TechnologyIcon technology="Electron" />
            <TechnologyIcon technology="Node.js" />
            <TechnologyIcon technology="Jest" />
            <TechnologyIcon technology="Vite" />
          </div>
        </div>
        <div className="flex gap-4">
          <Modal
            trigger={
              <Button variant={"default"} size="lg">
                VIew study case
              </Button>
            }
          >
            <Typography variant="h3">Example</Typography>
          </Modal>
        </div>
      </div>
      <div className="w-[90%] md:w-[40%] flex justify-center items-center">
        <img src={skullcandyMock.src} alt="Skullcandy Skull-HQ mock image" />
      </div>
    </div>
  );
};
