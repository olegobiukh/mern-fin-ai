
import { create } from "zustand";
interface Stats {
  totalAssets: string;
  occupancyRate: string;
  globalHospitals: number;
  doctors: number;
  availableOccupancy: string;
  visitedPatientsChange: string;
  totalPatients: string;
  centerName: string;
}

interface StoreState {
  stats: Stats | null;
  isLoading: boolean;
  error: string | null;
  fetchStats: () => Promise<void>;
}

export const useStore = create<StoreState>()((set) => ({
  stats: null,
  isLoading: false,
  error: null,
  fetchStats: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("http://localhost:5000/api/stats");
      if (!response.ok) throw new Error("Failed to fetch stats");
      const data = await response.json();
      set({ stats: data, isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },
}));