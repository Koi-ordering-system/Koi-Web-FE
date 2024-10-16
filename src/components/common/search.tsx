import { Button } from "@/components/ui";
import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import { useDebounce } from "@/hooks";
import { cn } from "@/lib";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

interface SearchProps {
  className?: string;
  placeholder?: string;
  keyObject?: string;
}

const Search: React.FC<SearchProps> = ({
  className,
  placeholder,
  keyObject = "default",
}) => {
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 500);

  const { setSearch: setSearchStore } = useSearchStore();

  useEffect(() => {
    if (keyObject) {
      setSearchStore(keyObject, searchDebounce);
    }
  }, [searchDebounce, keyObject, setSearchStore]);

  return (
    <div
      className={cn(
        "flex border rounded-full overflow-hidden bg-muted",
        className
      )}
    >
      <Button variant="ghost">
        <SearchIcon className="size-5 text-primary" />
        <span className="hidden font-semibold">Search</span>
      </Button>
      <input
        type="text"
        value={search}
        className="w-full bg-transparent border-none outline-none focus:outline-none focus:border-transparent"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
