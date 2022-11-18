import type { Params } from 'react-router-dom';

export type Route = {
  pattern: string;
  path: string;
  component: string;
  params?: Params;
};

export const a = 1;
