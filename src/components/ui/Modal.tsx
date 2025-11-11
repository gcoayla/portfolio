import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { type FC, type ReactNode } from "react";

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ trigger, children }) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogOverlay className="p-4" />
      <DialogContent className="sm:max-w-7xl">{children}</DialogContent>
    </Dialog>
  );
};
