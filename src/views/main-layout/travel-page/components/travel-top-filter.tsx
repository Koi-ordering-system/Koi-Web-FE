import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import UseFarmsQuery from "@/domains/stores/hooks/farms/use-farms";
import { useTravelsQuery } from "@/domains/stores/hooks/travels/use-travels";

import Show from "@/lib/show";
import { Loader } from "lucide-react";
import { useState } from "react";

export default function TravelTopFilter() {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })

    const { data: travels, isLoading: isTravelsLoading } = useTravelsQuery({});
    const { data: farms, isLoading: isFarmsLoading } = UseFarmsQuery({});

    return (
        <div className="w-full flex justify-center my-12 ">
            <div className='w-full p-8 gap-10 grid grid-cols-3 bg-white shadow-topFilterService'>
                {/* From */}
                <div className="">
                    <Show>
                        <Show.When isTrue={isTravelsLoading}>
                            <div>
                                <Loader />
                            </div>
                        </Show.When>
                        <Show.Else>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Travels" />
                                </SelectTrigger>
                                <SelectContent>
                                    {travels?.data?.items?.map((travel) => (
                                        <SelectItem key={travel.id} value={travel.id}>
                                            {travel.farmName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Show.Else>
                    </Show>
                </div>
                {/* To */}
                <div className="">
                    <Show>
                        <Show.When isTrue={isFarmsLoading}>
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
                                    {farms?.data?.items?.map((farm) => (
                                        <SelectItem key={farm.id} value={farm.id}>
                                            {farm.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Show.Else>
                    </Show>
                </div>
                {/* Date */}
                <div className="">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[300px] justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={setDate}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    )
}
