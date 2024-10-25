import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui";

interface DialogCustomProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
}

const DialogCustom: React.FC<DialogCustomProps> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogTrigger asChild>{title}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-[1000px] grid place-content-center border border-none bg-black/0">
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogCustom;
