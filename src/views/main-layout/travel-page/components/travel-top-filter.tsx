import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useTravelsQuery } from "@/domains/stores/hooks/travels/use-travels";

import Show from "@/lib/show";
import { Loader } from "lucide-react";

export default function TravelTopFilter() {
  const { data: travels, isLoading: isTravelsLoading } = useTravelsQuery({});
  return (
    <div className="flex justify-center w-full my-12 ">
      <div className="flex flex-wrap justify-center w-4/5 py-8 bg-white shadow-topFilterService">
        {/* From */}
        <div className="w-1/4 mx-5">
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
                  {travels?.data!.items?.map((travels) => (
                    <SelectItem key={travels.id} value={travels.id}>
                      {travels.farmName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Show.Else>
          </Show>
        </div>
        {/* To */}
        <div className="w-1/4 mx-5">
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
                  {travels?.data!.items?.map((travels) => (
                    <SelectItem key={travels.id} value={travels.id}>
                      {travels.farmName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Show.Else>
          </Show>
        </div>

        {/* Date */}
        <div className="w-1/4 mx-5">
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
                  {travels?.data!.items?.map((travels) => (
                    <SelectItem key={travels.id} value={travels.id}>
                      {travels.farmName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Show.Else>
          </Show>
        </div>
      </div>
    </div>
  );
}
