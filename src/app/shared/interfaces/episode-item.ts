export interface IEpisodeItem {
  image: {
    medium: string,
    original: string,
  };
  name: string;
  summary: string;
  number: number;
  runtime: number;
  id: number;
  season: number;
  airstamp: string;
}
