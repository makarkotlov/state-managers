import {signal} from '@preact/signals-react';

export const staticObj = signal<{staticField: number}>({
  staticField: 0,
});
