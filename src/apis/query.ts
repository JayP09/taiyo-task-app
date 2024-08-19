import { useQuery } from '@tanstack/react-query';
import { getCovid19Data, getCovidCountryData } from './api';
import { CountryCovidStats, CovidData } from './types';

export const useFetchCovid19Data = () => {
  return useQuery<CovidData, Error | string>({
    queryKey: ['covidData'],
    queryFn: getCovid19Data,
  });
};

export const useFetchCovidCountryData = () => {
  return useQuery<CountryCovidStats[], Error | string>({
    queryKey: ['covidDataCountry'],
    queryFn: getCovidCountryData,
  });
};
