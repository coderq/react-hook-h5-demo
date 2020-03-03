export type Gender = (0 | 1);
export interface Name {
  first: string;
  last: string;
};

export type User = {
  id: string;
  name: Name;
  gender: Gender;
  age: number;
};

export type Action = 
  | { type: 'INIT', payload: User }
  | { type: 'UPDATE', payload: User }