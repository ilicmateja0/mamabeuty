declare module '@heroicons/react/24/outline' {
  import { ComponentType, SVGProps } from 'react';
  
  export const Bars3Icon: ComponentType<SVGProps<SVGSVGElement>>;
  export const XMarkIcon: ComponentType<SVGProps<SVGSVGElement>>;
}

declare module '@testing-library/react' {
  import { ReactElement } from 'react';
  
  export function render(ui: ReactElement, options?: any): any;
  export const screen: {
    getByText: (text: string | RegExp) => HTMLElement;
    [key: string]: any;
  };
} 