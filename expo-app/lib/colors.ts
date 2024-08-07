type ThemeTypes = 'light' | 'dark';

export const colors = {
  accent: {
    light: '210 40% 96.1%',
    dark: '216 34% 17%',
  },
  'accent-foreground': {
    light: '222.2 47.4% 11.2%',
    dark: '210 40% 98%',
  },
  background: {
    light: '0 0% 100%',
    dark: '224 71% 4%',
  },
  border: {
    light: '214.3 31.8% 91.4%',
    dark: '216 34% 17%',
  },
  card: {
    light: '0 0% 100%',
    dark: '224 71% 4%',
  },
  'card-foreground': {
    light: '222.2 47.4% 11.2%',
    dark: '213 31% 91%',
  },
  destructive: {
    light: '0 100% 50%',
    dark: '0 63% 31%',
  },
  'destructive-foreground': {
    light: '210 40% 98%',
    dark: '210 40% 98%',
  },
  foreground: {
    light: '222.2 47.4% 11.2%',
    dark: '213 31% 91%',
  },
  input: {
    light: '214.3 31.8% 91.4%',
    dark: '216 34% 17%',
  },
  muted: {
    light: '210 40% 96.1%',
    dark: '223 47% 11%',
  },
  'muted-foreground': {
    light: '215.4 16.3% 46.9%',
    dark: '215.4 16.3% 56.9%',
  },
  popover: {
    light: '0 0% 100%',
    dark: '224 71% 4%',
  },
  'popover-foreground': {
    light: '222.2 47.4% 11.2%',
    dark: '215 20.2% 65.1%',
  },
  primary: {
    light: '222.2 47.4% 11.2%', // hsl(222.2 47.4% 11.2%)
    dark: '210 40% 98%', // hsl(210 40% 98%)
  },
  'primary-foreground': {
    light: '210 40% 98%', // hsl(210 40% 98%)
    dark: '222.2 47.4% 1.2%', // hsl(222.2 47.4% 1.2%)
  },
  ring: {
    light: '215 20.2% 65.1%',
    dark: '216 34% 17%',
  },
  secondary: {
    light: '210 40% 96.1%',
    dark: '222.2 47.4% 11.2%',
  },
  'secondary-foreground': {
    light: '222.2 47.4% 11.2%',
    dark: '210 40% 98%',
  },
} satisfies Record<string, Record<ThemeTypes, string>>;
