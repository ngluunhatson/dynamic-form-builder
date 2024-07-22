import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      fontSize: {
        "title-1-re": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: 400,
          },
        ],
        "title-1-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: 700,
          },
        ],
        "title-2-re": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 400,
          },
        ],
        "title-2-bold": [
          "14px",
          {
            lineHeight: "16px",
            fontWeight: 700,
          },
        ],
        "title-3-re": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 400,
          },
        ],
        "title-3-bold": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: 700,
          },
        ],
        "title-4-re": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: 400,
          },
        ],
        "title-4-bold": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        "title-5-light": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: 300,
          },
        ],
        "title-5-semi": [
          "22px",
          {
            lineHeight: "24px",
            fontWeight: 600,
          },
        ],
        "title-6-light": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: 300,
          },
        ],
        "title-6-semi": [
          "24px",
          {
            lineHeight: "28px",
            fontWeight: 600,
          },
        ],
        "title-7-light:": [
          "32px",
          {
            lineHeight: "32px",
            fontWeight: 300,
          },
        ],
        "title-7-semi": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: 600,
          },
        ],
        "title-8-light": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: 300,
          },
        ],
        "title-8-semi": [
          "48px",
          {
            lineHeight: "52px",
            fontWeight: 600,
          },
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
