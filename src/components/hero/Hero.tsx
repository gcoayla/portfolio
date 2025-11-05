import { Typography } from "../ui/Typography";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-lvh pl-10 flex flex-col justify-center items-start gap-2"
    >
      <Typography variant="h1" className="uppercase">
        Hi! I'm Gonzalo Coayla
      </Typography>
      <Typography variant="h3" className="max-w=[80%] md:max-w-[70%]">
        Senior Frontend Engineer building polished, complex UIs—from interactive
        3D models to scalable design systems.
      </Typography>
    </section>
  );
};
