export const defaultTheme = {
  colors: {
    "primary-base": "#A277FF",
    "primary-dark": "#674D9C",

    "secondary-base": "#3ABE92",
    "secondary-dark": "#207559",

    "danger-base": "#E25858",

    "gray-700": "#0D0D0D",
    "gray-600": "#1A1A1A",
    "gray-500": "#262626",
    "gray-400": "#333333",
    "gray-300": "#808080",
    "gray-200": "#D9D9D9",
    "gray-100": "#F2F2F2",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export type ThemeType = typeof defaultTheme;
