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
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
// import { useSpeciesQuery } from "@/domains/stores/hooks/species/use-species";
import Show from "@/lib/show";
import { Loader, Minus } from "lucide-react";
import { useState } from "react";

const TravelSideFilter = () => {
  const [date, setDate] = useState<Date>()
  const { data: farms, isLoading: isFarmLoaing } = UseFarmsQuery({});

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
              {/* <Show.When isTrue={isFarmLoaing}>
                <div>
                  <Loader />
                </div>
              </Show.When> */}
              {/* <Show.Else> */}
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
              {/* </Show.Else> */}
            </Show>
          </div>
        </div>
      </div>

      {/* Days */}
      <div className="mt-10 space-y-5">
        <div>
          <div className="flex items-center justify-center gap-5">
            <span className="text-lg font-semibold text-primary">Farms</span>
            <div className="w-full h-[2px] rounded-full bg-primary"></div>
          </div>

          <div className="">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
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
            </Button><Button
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
