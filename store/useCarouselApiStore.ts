import { create } from "zustand"
import type { CarouselApi } from "@/components/ui/carousel"

type Store = {
    api: CarouselApi | null
    setApi: (api: CarouselApi) => void
}

export const useCarouselApiStore = create<Store>((set) => ({
    api: null,
    setApi: (api) => set({ api }),
}))
