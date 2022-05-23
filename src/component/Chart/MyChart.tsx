import * as React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography } from '@mui/material'

const MyChart = () => {

  // Sample data
  const mydata = [
    { name: 'Ecosystem', value: 30 },
    { name: 'Development Team', value: 24 },
    { name: 'Liquidity Pool', value: 15 },
    { name: 'Marketing', value: 10 },
    { name: 'Private Sale', value: 10 },
    { name: 'Seed Sale', value: 5 },
    { name: 'IDO/IEO', value: 4 },
    { name: 'Team Advisors', value: 2 },
  ];

  const mycolors = ['#00FFCE', '#00E3FF', '#00C4D3', '#00A2B6', '#008697', '#009578', '#00AD8C', '#00D8AE'];
  const totaldata = [
    { name: 'Ecosystem', value: 30, color: '#00FFCE' },
    { name: 'Development Team', value: 24, color: '#00E3FF' },
    { name: 'Liquidity Pool', value: 15, color: '#00C4D3' },
    { name: 'Marketing', value: 10, color: '#00A2B6' },
    { name: 'Private Sale', value: 10, color: '#008697' },
    { name: 'Seed Sale', value: 5, color: '#009578' },
    { name: 'IDO/IEO', value: 4, color: '#00AD8C' },
    { name: 'Team Advisors', value: 2, color: '#00D8AE' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <PieChart width={250} height={252}>
        <Pie
          data={mydata}
          cx="50%"
          cy="50%"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {mydata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={mycolors[index % mycolors.length]} />
          ))}
        </Pie>
      </PieChart>
      <Box sx={{ padding: '20px 0px' }}>
        {
          totaldata.map((datainfo, index) => (
            <Box key={index} sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '8px', height: '8px', backgroundColor: `${datainfo.color}`, marginRight: '10px' }}></Box>
              <Typography>{datainfo.value}% {datainfo.name}</Typography>
            </Box>
          ))
        }
      </Box>
    </div >
  );
}

export default MyChart;