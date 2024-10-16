import assert from "@/assets";
import { Button } from "@/components/ui";
import useSequentialReveal from "@/hooks/use-sequential-reveal";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroContent = () => {
  const visiable = useSequentialReveal(1);
  const navigation = useNavigate();
  return (
    <div className="relative mb-20">
      <img
        src={assert.hero}
        alt="hero"
        className="object-cover w-screen h-[650px] blur-sm"
      />
      <div className="container absolute inset-0 flex flex-row items-center justify-between text-white px-16">
        <div>
          {visiable > 0 && (
            <h1 className="text-5xl font-bold text-destructive animate-float-in">
              Koi
            </h1>
          )}
          {visiable > 0 && (
            <p className="w-[600px]  font-medium animate-float-in">
              Our app makes it easy for you to book trips to Japan to directly
              purchase Koi fish from renowned farms. You'll have the opportunity
              to own the highest quality Koi, carefully selected. With our
              dedicated support, we ensure a convenient and trustworthy Koi
              purchasing experience.
            </p>
          )}
          {visiable > 0 && (
            <Button
              className="space-x-2 animate-float-in"
              onClick={() => navigation("koi")}
            >
              <span>See more</span>
              <ArrowRight className="size-4" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 ">
          <div className="col-span-1 w-60 h-96">
            {visiable > 0 && (
              <img
                src={assert.fish}
                alt="fish"
                className="w-full rounded-lg shadow-md animate-float-in shadow-muted-foreground"
              />
            )}
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="w-64 h-52 ">
              {visiable > 0 && (
                <img
                  src={assert.fishHorizontal}
                  alt="fish"
                  className="rounded-lg shadow-md size-full animate-float-in shadow-muted-foreground"
                />
              )}
            </div>
            <div className="w-64 h-52 ">
              {visiable > 0 && (
                <img
                  src={assert.fishVertical}
                  alt="fish"
                  className="rounded-lg shadow-md size-full animate-float-in shadow-muted-foreground"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
