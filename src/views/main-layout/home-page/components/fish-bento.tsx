import assert from "@/assets";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  Button,
} from "@/components/ui";
import useSequentialReveal from "@/hooks/use-sequential-reveal";
import { ArrowRight } from "lucide-react";

const FishBento = () => {
  const visiable = useSequentialReveal(2);
  return (
    <section className="container my-32">
      {visiable > 0 && (
        <div className="relative h-1 bg-muted animate-float-in">
          <div className="absolute top-0 transform -translate-y-1/2 -translate-x-96 right-1/2">
            <span className="px-2 text-5xl font-semibold bg-background text-destructive">
              Fish
            </span>
          </div>
        </div>
      )}

      <div className="relative grid grid-cols-3 grid-rows-2 gap-4 mt-14">
        <div className="row-span-2 shadow-xl ">
          <img src={assert.fish} alt="fish" className=" size-full rounded-xl" />
        </div>
        <div className="shadow-xl ">
          <img
            src={assert.fishHorizontal}
            alt="fish"
            className=" size-full rounded-xl"
          />
        </div>
        <div className="col-start-2 row-start-2 shadow-xl ">
          <img
            src={assert.fishHorizontal}
            alt="fish"
            className=" size-full rounded-xl"
          />
        </div>
        <div className="col-start-3 row-span-2 row-start-1 shadow-xl ">
          <img src={assert.fish} alt="fish" className=" size-full rounded-xl" />
        </div>
        <Button className="absolute z-10 space-x-2 -translate-x-1/2 bottom-6 left-1/2">
          <span>See More</span>
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default FishBento;
