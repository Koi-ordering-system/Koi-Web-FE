import { create } from "zustand";

interface FilterState {
  filters: {
    [key: string]: {
      farm?: string | ""; // ID hoặc tên farm cần lọc
      priceRange?: [number, number]; // Khoảng giá (min và max)
    };
  };
  setFilters: (key: string, filters: { farm?: string | ""; priceRange?: [number, number] }) => void;
  updateFarmFilter: (key: string, farm: string | "") => void; // Chỉ cập nhật một farm
  updatePriceRangeFilter: (key: string, priceRange: [number, number]) => void;
}

const useFilterStore = create<FilterState>((set) => ({
  filters: {
    default: {
      farm: "", // Không có farm mặc định
      priceRange: [0, 1000000], // Khoảng giá mặc định
    },
  },

  setFilters: (key, filters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: { ...state.filters[key], ...filters },
      },
    })),

  updateFarmFilter: (key, farm) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: {
          ...state.filters[key],
          farm, // Cập nhật farm
        },
      },
    })),

  updatePriceRangeFilter: (key, priceRange) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: {
          ...state.filters[key],
          priceRange,
        },
      },
    })),
}));

export default useFilterStore;
