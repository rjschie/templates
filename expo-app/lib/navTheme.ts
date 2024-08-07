import type { Theme } from '@react-navigation/native';

import { colors } from '~/lib/colors';

export const LightTheme = {
  dark: false,
  colors: {
    background: `hsl(${colors.background.light})`,
    border: `hsl(${colors.border.light})`,
    card: `hsl(${colors.card.light})`,
    notification: `hsl(${colors.destructive.light})`,
    primary: `hsl(${colors.primary.light})`,
    text: `hsl(${colors.foreground.light})`,
  },
} satisfies Theme;

export const DarkTheme = {
  dark: false,
  colors: {
    background: `hsl(${colors.background.dark})`,
    border: `hsl(${colors.border.dark})`,
    card: `hsl(${colors.card.dark})`,
    notification: `hsl(${colors.destructive.dark})`,
    primary: `hsl(${colors.primary.dark})`,
    text: `hsl(${colors.foreground.dark})`,
  },
} satisfies Theme;
