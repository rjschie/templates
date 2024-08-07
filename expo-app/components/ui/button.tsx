import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { Pressable } from 'react-native';

import { IconClassContext } from '~/components/icon';
import { TextClassContext } from '~/components/ui/text';
import { cn } from '~/lib/ui/utils';

const buttonVariants = cva(
  'group flex flex-row gap-1 items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        outline:
          'border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        secondary: 'bg-secondary web:hover:opacity-80 active:opacity-80',
        ghost:
          'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline ',
      },
      size: {
        sm: 'h-9 px-3 rounded-sm',
        default: 'h-11 px-4 rounded',
        lg: 'h-14 px-6 rounded-lg gap-2',
        xl: 'h-20 px-8 rounded-lg gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const buttonTextVariants = cva(
  'text-base font-medium text-foreground web:transition-colors web:whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        destructive: 'text-destructive-foreground',
        outline: 'group-active:text-accent-foreground',
        secondary:
          'text-secondary-foreground group-active:text-secondary-foreground',
        ghost: 'group-active:text-accent-foreground',
        link: 'text-primary group-active:underline',
      },
      size: {
        sm: 'text-sm',
        default: '',
        lg: 'text-xl',
        xl: 'text-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const buttonIconVariants = cva('', {
  variants: {
    variant: {
      default: 'color-primary-foreground',
      destructive: 'color-destructive-foreground',
      outline: 'color-foreground group-active:color-accent-foreground',
      secondary:
        'color-secondary-foreground group-active:color-secondary-foreground',
      ghost: 'color-foreground group-active:color-accent-foreground',
      link: 'color-primary group-active:underline',
    },
    size: {
      sm: 'size-4',
      default: 'size-5',
      lg: 'size-[21px]',
      xl: 'size-7',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <TextClassContext.Provider
      value={cn(
        props.disabled && 'web:pointer-events-none',
        buttonTextVariants({ variant, size }),
      )}
    >
      <IconClassContext.Provider
        value={cn(
          props.disabled && 'web:pointer-events-none',
          buttonIconVariants({ variant, size }),
        )}
      >
        <Pressable
          className={cn(
            props.disabled && 'opacity-50 web:pointer-events-none',
            buttonVariants({ variant, size, className }),
          )}
          ref={ref}
          role="button"
          {...props}
        />
      </IconClassContext.Provider>
    </TextClassContext.Provider>
  );
});
Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
