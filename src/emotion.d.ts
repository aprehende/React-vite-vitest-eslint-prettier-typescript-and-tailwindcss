import '@emotion/react';
import { Theme as ITheme } from '@/models';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ITheme {}
}
