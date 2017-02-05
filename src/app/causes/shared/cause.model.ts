export interface ICause {
  id: number;
  name: string;
  content: string;
  remaining: number;
  total: number;
  segment: string;
  isPrivate: boolean;
  rel_province: number;
}

export class Cause implements ICause {
    constructor(public id: number,
        public name: string,
        public content: string,
        public remaining: number,
        public total: number,
        public segment: string,
        public isPrivate: boolean,
        public rel_province: number) {

        }
}