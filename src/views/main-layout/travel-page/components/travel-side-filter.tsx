import Search from "@/components/common/search";
import {
  // Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
// import { useSpeciesQuery } from "@/domains/stores/hooks/species/use-species";
import Show from "@/lib/show";
import {  Minus } from "lucide-react";
import { useEffect, useState } from "react";
import useFilterStore from "@/domains/stores/zustand/filter/use-filter-store";

const TravelSideFilter = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000000);

  // const [date, setDate] = useState<Date>()
  const { data: farms } = UseFarmsQuery({});
  // console.log(farms);
  const { updateFarmFilter, updatePriceRangeFilter } = useFilterStore();

  useEffect(() => {
    updatePriceRangeFilter("travel", [minPrice, maxPrice]);
  }, [minPrice, maxPrice, updatePriceRangeFilter]);

  return (
    <aside className="">
      <Search placeholder="Search" keyObject={"travel"} />
      {/* Farm */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Farms</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="mt-6 ">
            <Show>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Farms" />
                </SelectTrigger>
                <SelectContent>
                  {farms?.data?.items?.map((farm) => (
                    <SelectItem
                      key={farm.id}
                      value={farm.id}
                      onSelect={() => updateFarmFilter("travel", farm.id)}
                    >
                      {farm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* </Show.Else> */}
            </Show>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Price</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <Input
                type="text"
                value={minPrice}
                inputMode="none"
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
              <span className="font-semibold text-muted-foreground">VND</span>
            </div>
            <Minus className="size-4" />
            <div className="flex items-center gap-1">
              <Input
                type="text"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <span className="font-semibold text-muted-foreground">VND</span>
            </div>
          </div>
        </div>
      </div>



      {/* Rating */}
      {/* <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Rating</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>1 ⭐️</span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>2 ⭐️</span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>3 ⭐️</span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>4 ⭐️</span>
            </Button>
            <Button
              variant="outline"
              className="border-muted-foreground text-muted-foreground"
            >
              <span>5 ⭐️</span>
            </Button>
          </div>
        </div>
      </div> */}

    </aside>
  );
};

export default TravelSideFilter;
