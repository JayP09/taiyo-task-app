import { get } from '../utils/axios.util';

export const getCovid19Data = async () => {
  try {
    const { data } = await get({
      url: 'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getCovidCountryData = async () => {
  try {
    const { data } = await get({
      url: 'https://disease.sh/v3/covid-19/countries',
    });
    return data;
  } catch (error) {
    return error;
  }
};
