export interface IShowItem {
  externals: {};
  genres: Array<string>;
  id: number;
  image: {
    medium: string,
    original: string
  };
  language: string;
  name: string;
  network: {};
  officialSite: string;
  premiered: string;
  rating: {
    average: number
  };
  runtime: number;
  schedule: {};
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: null;
  weight: number;
  _links: {};
  show?: {
    id: number;
    image: {
      medium: string,
      original: string
    };
    name: string;
    rating: {
      average: number
    };
  };
}
