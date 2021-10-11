export interface Result {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface IPeopleResponse {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
