export interface IScheduleItem {
  name: string;
  season: number;
  number: number;
  runtime: number;
  show: {
    language: string,
    webChannel: {
      name: string
    },
    name: string,
    id: number,
    schedule: {
      time: string
    }
  };
  _embedded: {
    show: {
      network: {
        country: {
          name: string,
          code: string
        }
      }
    }
  };
}
