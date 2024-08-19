import React from 'react';
import MapComponent from '../components/MapComponent';
import LineChartComponent from '../components/LineChartComponent';
import PageLayout from '../ui/PageLayout';

// Dashboard component for showing map and line chart
const Dashboard = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <h2 className='ml-7 md:ml-0'>Charts and Map</h2>
      </PageLayout.Header>
      <div className='flex-1 overflow-y-scroll p-10'>
        <div className='flex flex-col lg:flex-row w-full gap-5 lg:gap-3'>
          <div className='flex flex-col gap-3 w-full lg:w-1/2'>
            <h1 className='text-xl font-bold'>Covid Country Specific data</h1>
            <MapComponent />
          </div>
          <div className='flex flex-col gap-3 w-full lg:w-1/2'>
            <h1 className='text-xl font-bold'>Covid Country Specific data</h1>
            <LineChartComponent />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
