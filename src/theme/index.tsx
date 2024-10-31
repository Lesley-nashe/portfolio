import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
      breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      tokens: {
        colors: {
          red: {
            50:{ value: "#fef2f2" },
            100: {value: "#fee2e2"},
            200: { value: "#fecaca"},
            300: { value: "#fca5a5"},
            400: { value: "#f87171"},
            500: { value: "#ef4444"},
            600: { value: "#dc2626"},
            700: { value: "#991919"},
            800: { value: "#511111"},
            900: { value: "#300c0c"},
            950: { value: "#1f0808"}
        },
        gray: {
            50: { value: "#fafafa"},
            100: { value: "#f4f4f5"},
            200: { value: "#e4e4e7"},
            300: { value: "#d4d4d8"},
            400: { value: "#a1a1aa"},
            500: { value: "#71717a"},
            600: { value: "#52525b"},
            700: { value: "#3f3f46"},
            800: { value: "#27272a"},
            900: { value: "#18181b"},
            950: { value: "#111111"},
        },
        pink: {
            50: { value: "#fdf2f8"},
            100: { value: "#fce7f3"},
            200: { value: "#fbcfe8"},
            300: { value: "#f9a8d4"},
            400: { value: "#f472b6"},
            500: { value: "#ec4899"},
            600: { value: "#db2777"},
            700: { value: "#a41752"},
            800: { value: "#6d0e34"},
            900: { value: "#45061f"},
            950: { value: "#2c0514"},
        },
        purple: {
            50: { value: "#faf5ff"},
            100: { value: "#f3e8ff"},
            200: { value: "#e9d5ff"},
            300: { value: "#d8b4fe"},
            400: { value: "#c084fc"},
            500: { value: "#a855f7"},
            600: { value: "#9333ea"},
            700: { value: "#641ba3"},
            800: { value: "#4a1772"},
            900: { value: "#2f0553"},
            950: { value: "#1a032e"},
        },
        green: {
            50: { value: "#f0fdf4"},
            100: { value: "#dcfce7"},
            200: { value: "#bbf7d0"},
            300: { value: "#86efac"},
            400: { value: "#4ade80"},
            500: { value: "#22c55e"},
            600: { value: "#16a34a"},
            700: { value: "#116932"},
            800: { value: "#124a28"},
            900: { value: "#042713"},
            950: { value: "#03190c"},

        },
        blue: {
            50: { value: "#eff6ff"},
            100: { value: "#dbeafe"},
            200: { value: "#bfdbfe"},
            300: { value: "#a3cfff"},
            400: { value: "#60a5fa"},
            500: { value: "#3b82f6"},
            600: { value: "#2563eb"},
            700: { value: "#173da6"},
            800: { value: "#1a3478"},
            900: { value: "#14204a"},
            950: { value: "#0c142e"},
        }
    },
      },
      semanticTokens: {
        colors: {
          danger: { value: "{colors.red}" },
        },
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  })
  
  export default createSystem(config)