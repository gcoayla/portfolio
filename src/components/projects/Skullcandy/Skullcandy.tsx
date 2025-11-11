import { Typography } from "@/components/ui/Typography";
import skullcandyMock from "@/assets/mock.PNG";
import TechnologyIcon from "@/components/ui/TechnologyIcon";

export const Skullcandy = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center">
      <div className="w=[90%] md:w-[40%] flex flex-col gap-10">
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
        <div className="flex flex-col gap-4">
          <Typography variant="h6" className="text-white">
            Technologies Used
          </Typography>
          <div className="flex gap-4">
            <TechnologyIcon technology="React" size="small" />
            <TechnologyIcon technology="TypeScript" size="small" />
            <TechnologyIcon technology="Electron" size="small" />
            <TechnologyIcon technology="Node.js" size="small" />
            <TechnologyIcon technology="Jest" size="small" />
            <TechnologyIcon technology="Vite" size="small" />
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[55%] flex justify-center items-center">
        <img src={skullcandyMock.src} alt="Skullcandy Skull-HQ mock image" />
      </div>
    </div>
  );
};
