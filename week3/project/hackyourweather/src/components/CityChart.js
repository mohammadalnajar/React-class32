import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';
import { get5Days } from '../utils/get5DaysForecast';
export const CityChart = () => {
  const { goBack } = useHistory();
  const { cityName } = useParams();
  const [chartData, setChartData] = useState([]);

  const fetchDataChart = useCallback(async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const data = await response.json();
      const forecastData = get5Days(data);
      setChartData(forecastData);
    } catch (error) {
      console.log(error);
    }
  }, [cityName]);
  useEffect(() => {
    fetchDataChart();
  }, [fetchDataChart]);

  return (
    <>
      <div>
        <Button variant='contained' color='primary' onClick={() => goBack()}>
          Go Back
        </Button>
      </div>

      <Grid container justifyContent='center'>
        <h3>{cityName}</h3>
        <div>
          <AreaChart
            width={730}
            height={250}
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorTemp' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='day' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='temp'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorTemp)'
            />
          </AreaChart>
        </div>
      </Grid>
    </>
  );
};
