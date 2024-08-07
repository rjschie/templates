import { createContext, useContext } from 'react';

import { Icons, icons } from '~/lib/ui/icons';
import { cn } from '~/lib/ui/utils';

type IconProps = {
  name: Icons;
  className?: string;
};

const IconClassContext = createContext<string | undefined>(undefined);

const Icon = ({ name, className }: IconProps) => {
  const IconComponent = icons[name];
  const iconClass = useContext(IconClassContext);

  return <IconComponent className={cn(className, iconClass)} />;
};

export { Icon, IconClassContext };
