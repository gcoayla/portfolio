import { Typography } from "@/components/ui/Typography";
import skullcandyMock from "@/assets/mock.png";

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
      </div>
      <div className="w-[90%] md:w-[55%] flex justify-center items-center">
        <img src={skullcandyMock.src} alt="Skullcandy Skull-HQ mock image" />
      </div>
    </div>
  );
};
