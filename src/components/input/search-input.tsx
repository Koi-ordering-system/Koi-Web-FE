// src/components/FarmSearch.tsx

import React from 'react';
import { Input } from "@/components/ui/input"; 
import { IoMdSearch } from "react-icons/io";

interface FarmSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const FarmSearch: React.FC<FarmSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-4">
      <IoMdSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
      <Input
        type="text"
        placeholder="Search Farms..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default FarmSearch;
