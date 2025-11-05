import { Typography } from "../ui/Typography";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="h-lvh flex flex-col justify-center items-start gap-2"
    >
      <Typography variant="h1">Hi! I'm Gonzalo Coayla</Typography>
      <Typography variant="h2">
        Senior Frontend Engineer building polished, complex UIs—from interactive
        3D models to scalable design systems.
      </Typography>
    </section>
  );
};
