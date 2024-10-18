import Search from "@/components/common/search";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import { useSpeciesQuery } from "@/domains/stores/hooks/species/use-species";
import Show from "@/lib/show";
import { Loader, Minus } from "lucide-react";

const KoiFilter = () => {
  const { data: farms, isLoading: isFarmLoaing } = UseFarmsQuery({});
  const { data: species, isLoading: isSpeciesLoading } = useSpeciesQuery({});

  return (
    <aside className=" ">
      <Search placeholder="Search" keyObject={"koi"} />

      {/* Price */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Price</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <Input type="number" min={1000000} defaultValue={1000000} />
              <span className="font-semibold text-muted-foreground">VND</span>
            </div>
            <Minus className="size-4" />
            <div className="flex items-center gap-1">
              <Input type="number" min={1000000} defaultValue={2000000} />
              <span className="font-semibold text-muted-foreground">VND</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gender */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Gender</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="mt-6 space-x-2">
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>Male</span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>Female</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Species */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Species</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="mt-6 space-x-2">
            <Show>
              <Show.When isTrue={isSpeciesLoading}>
                <div>
                  <Loader />
                </div>
              </Show.When>
              <Show.Else>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Species" />
                  </SelectTrigger>
                  <SelectContent>
                    {species?.data.items?.map((species) => (
                      <SelectItem key={species.id} value={species.id}>
                        {species.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Show.Else>
            </Show>
          </div>
        </div>
      </div>

      {/* Farm */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Farms</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="mt-6 ">
            <Show>
              <Show.When isTrue={isFarmLoaing}>
                <div>
                  <Loader />
                </div>
              </Show.When>
              <Show.Else>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Farms" />
                  </SelectTrigger>
                  <SelectContent>
                    {farms?.data.items?.map((farm) => (
                      <SelectItem key={farm.id} value={farm.id}>
                        {farm.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Show.Else>
            </Show>
          </div>
        </div>
      </div>

      {/* Colour */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Colour</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <div className="bg-red-500 border-2 rounded-full border-foreground size-10 hover:cursor-pointer hover:bg-red-600"></div>
            <div className="bg-black border-2 rounded-full border-foreground size-10 hover:cursor-pointer hover:bg-black/70"></div>
            <div className="bg-yellow-500 border-2 rounded-full border-foreground size-10 hover:cursor-pointer hover:bg-yellow-600"></div>
            <div className="bg-white border-2 rounded-full border-foreground size-10 hover:cursor-pointer hover:bg-white/70"></div>
            <div className="border-2 rounded-full bg-slate-500 border-foreground size-10 hover:cursor-pointer hover:bg-slate-600"></div>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Size</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>10 - 13cm </span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>13 - 16cm</span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>17 - 20cm </span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>21 - 25cm </span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>26 - 30cm </span>
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default KoiFilter;
