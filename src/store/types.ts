export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALEART = "SET_ALEART";

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_main: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezon: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAcrtion {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAcrtion;

export interface AlertAction {
  type: typeof SET_ALEART;
  payload: string;
}

export interface AlertState {
  message: string;
}
