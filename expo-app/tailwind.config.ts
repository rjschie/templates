/* eslint-env node */
import { hairlineWidth } from 'nativewind/theme';
import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

import { colors } from './lib/colors';

/**
 * Generate the tailwind colors config in the format needed based on our themed
 * color palette at `./lib/colors.ts`.
 */
export function generateTailwindConfigColors() {
  const colorKeys = Object.keys(colors) as (keyof typeof colors)[];
  const colorsWithForeground = colorKeys
    .filter((k) => k.includes('-foreground'))
    .map((k) => k.replace('-foreground', ''));
  const colorsWithoutForeground = colorKeys
    .filter((k) => !k.includes('-foreground'))
    .filter((k) => !(colorsWithForeground as string[]).includes(k));

  const hslString = (k: string, foreground: boolean = false) =>
    `hsl(var(--${k}${foreground ? '-foreground' : ''}) / <alpha-value>)`;

  return {
    ...Object.fromEntries(
      colorsWithoutForeground.map((k) => [k, hslString(k)]),
    ),
    ...Object.fromEntries(
      colorsWithForeground.map((k) => [
        k,
        {
          DEFAULT: hslString(k),
          foreground: hslString(k, true),
        },
      ]),
    ),
  };
}

export default {
  darkMode: 'media',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    borderRadius: {
      none: '0px',
      sm: '8px',
      DEFAULT: '10px',
      lg: '14px',
      xl: '24px',
      full: '9999px',
    },
    extend: {
      colors: generateTailwindConfigColors(),
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    ({ addBase, addVariant }: PluginAPI) => {
      addVariant('something', '& .somethinggood');

      addBase({
        ':root': Object.fromEntries(
          Object.entries(colors).map(([key, val]) => [`--${key}`, val.light]),
        ),
        '@media (prefers-color-scheme: dark)': {
          ':root': Object.fromEntries(
            Object.entries(colors).map(([key, val]) => [`--${key}`, val.dark]),
          ),
        },
      });
    },
  ],
} satisfies Config;
