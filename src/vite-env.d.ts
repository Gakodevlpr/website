/// <reference types="vite/client" />

// Minimal typing for the experimental View Transitions API
// This prevents TS errors when checking for document.startViewTransition
interface Document {
  // eslint-disable-next-line @typescript-eslint/ban-types
  startViewTransition?: (callback: Function) => void;
}

declare module '*.svg?react' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }