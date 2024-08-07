import { View, type ViewProps } from 'react-native';

export type ThemedScreenProps = ViewProps & {};

export function ScreenContainer({
  className,
  ...otherProps
}: ThemedScreenProps) {
  return (
    <View
      className={`h-full w-full bg-background ${className}`}
      {...otherProps}
    />
  );
}
