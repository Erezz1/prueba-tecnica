export interface ConficionesAtmosfericas {
  pagination: Pagination;
  results: Result[];
}

export interface Result {
  _id: string;
  cityid: string;
  name: string;
  state: string;
  validdateutc: string;
  probabilityofprecip: string;
  relativehumidity: string;
  lastreporttime: string;
}

interface Pagination {
  pageSize: number;
  page: number;
  total: number;
}

export interface City {
  _id: string;
  cityid: string;
  validdateutc: string;
  winddirectioncardinal: string;
  probabilityofprecip: string;
  relativehumidity: string;
  name: string;
  'date-insert': string;
  longitude: string;
  state: string;
  lastreporttime: string;
  skydescriptionlong: string;
  stateabbr: string;
  tempc: string;
  latitude: string;
  iconcode: string;
  windspeedkm: string;
}
