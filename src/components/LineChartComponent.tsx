import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useFetchCovid19Data } from '../apis/query';
import MapLoadingSkeleton from './MapLoadingSkeleton';
import { twMerge } from 'tailwind-merge';

type ChartData = {
  date: string;
  cases?: number;
  deaths?: number;
  recovered?: number;
};

// LineChart component for rendering LineChart from api data
const LineChartComponent = () => {
  const { data, isLoading, isError } = useFetchCovid19Data();

  // handle error in api fetch
  if (isError) {
    return (
      <div className='chart-container flex justify-center items-center h-96'>
        Error Loading Data
      </div>
    );
  }

  const chartData: ChartData[] = Object.keys(data?.cases || {}).map((date) => ({
    date,
    cases: data?.cases[date],
    deaths: data?.deaths[date],
    recovered: data?.recovered[date],
  }));

  // function to format YAxis Ticks
  const formatYAxisTick = (tick: number | string) => {
    if (typeof tick === 'number') {
      const absTick = Math.abs(tick);
      if (absTick >= 1000000) {
        return `${(tick / 1000000).toFixed(1)}M`;
      } else if (absTick >= 1000) {
        return `${(tick / 1000).toFixed(1)}K`;
      }
      return tick.toString();
    }
    return tick;
  };

  return (
    <div
      className={twMerge(
        'rounded-md overflow-hidden w-full h-full',
        isLoading && 'h-96',
      )}>
      {isLoading ? (
        <MapLoadingSkeleton /> // Loader
      ) : (
        <ResponsiveContainer width='100%' height={380}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis tickFormatter={formatYAxisTick} />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='cases' stroke='#8884d8' />
            <Line type='monotone' dataKey='deaths' stroke='#82ca9d' />
            <Line type='monotone' dataKey='recovered' stroke='#ffc658' />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default LineChartComponent;
