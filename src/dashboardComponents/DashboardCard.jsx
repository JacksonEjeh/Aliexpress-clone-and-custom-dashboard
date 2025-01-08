import React from 'react';

const DashboardCard = () => {
  return (
    <div className="bg-primary text-white p-[17px] rounded-lg shadow-lg">
      <div className="">
        <p className="text-white">Monthly Orders Goal (20,000+)</p>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
            <div className='flex gap-1 items-center'>
                <span className="text-sm font-semibold text-blue-500">85%</span>
                <p className='text-custom-text text-sm'>Total order</p>
            </div>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
          <div style={{ width: '85%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;