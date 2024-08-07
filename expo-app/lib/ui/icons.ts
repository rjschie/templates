import { cssInterop } from 'nativewind';

import folder from '~/assets/icons/folder.svg';
import vault from '~/assets/icons/vault.svg';

export type Icons = keyof typeof icons;

export const icons = {
  folder,
  vault,
};

for (const ico of Object.values(icons)) {
  cssInterop(ico, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        height: true,
        width: true,
      },
    },
  });
}
