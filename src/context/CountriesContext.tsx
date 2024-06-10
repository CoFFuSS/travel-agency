import { createContext, useContext, ReactNode } from 'react';

import { Country } from '@/types/countriesResponses';

interface CountriesProviderProps {
  countries: Country[];
  children: ReactNode;
}

const CountriesContext = createContext<Country[]>([]);

export const CountriesProvider = ({ countries, children }: CountriesProviderProps) => (
  <CountriesContext.Provider value={countries}>{children}</CountriesContext.Provider>
);

export const useCountries = () => useContext(CountriesContext);
