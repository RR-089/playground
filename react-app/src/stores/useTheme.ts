import { create } from "zustand";

export const THEMES = [
  "aqua",
  "retro",
  "black",
  "hallowen",
  "forest",
  "valentine",
];

export type TThemes = (typeof THEMES)[number];

type themeStore = {
  theme: TThemes;
  setTheme: (theme: TThemes) => void;
};

export const useThemeStore = create<themeStore>((set) => ({
  theme: (localStorage.getItem("theme") as TThemes) || "aqua",

  setTheme: (theme: TThemes) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
