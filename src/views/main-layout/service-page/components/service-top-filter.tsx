import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui";
import { useSpeciesQuery } from "@/domains/stores/hooks/species/use-species";
import Show from "@/lib/show";
import { Loader } from "lucide-react";

export default function ServiceTopFilter() {
    const { data: species, isLoading: isSpeciesLoading } = useSpeciesQuery({});
    return (
        <div className="w-full flex justify-center my-12 ">
            <div className='w-4/5 py-8 flex flex-wrap justify-center bg-white shadow-topFilterService'>
                {/* From */}
                <div className="w-1/4 mx-5">
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
                {/* To */}
                <div className="w-1/4 mx-5">
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

                {/* Date */}
                <div className="w-1/4 mx-5">
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
    )
}
