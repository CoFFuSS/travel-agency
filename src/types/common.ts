import { Country } from './countriesResponses';

export interface ParamsLocale {
  params: { locale: string };
}

export interface HomeProps {
  params: {
    locale: string;
  };
  countries: Country[];
}
