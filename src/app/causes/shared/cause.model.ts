export interface ICause {
  id: number;
  name: string;
  remaining: number;
  total: number;
  segment: string;
  isPrivate: boolean;
}

export class Cause implements ICause {
    constructor(public id: number,
        public name: string,
        public remaining: number,
        public total: number,
        public segment: string,
        public isPrivate: boolean) {

        }
}