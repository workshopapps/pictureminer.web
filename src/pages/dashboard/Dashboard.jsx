import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import useGetBatch from '../../Hooks/useGetBatch';
import { ResponsiveContainer, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Text } from 'recharts';
import { notifyError } from '../../utils/notify';

axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { response:batchImages } = useGetBatch();
  const xLabelAngle = window.innerWidth < 500 ? -45 : 0;
  const BarDataChartLastFiveDays = batchImages?.data.filter(item => {
    const date = new Date(item.date_created);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 5;})?.map(batch => {
    return {
      id: batch.id,
      Tagged: batch.tagged,
      Untagged: batch.untagged,
      total: batch.total,
      date_created: new Date(batch.date_created).toLocaleDateString('en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }),
    };
  }
  );


  const [dashboarddata, setDashboardData] = useState({ imageData: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDashboardData((prev) => {
          return {
            ...prev,
            loading: true,
          };
        });

        const response = await axios.get('mine-service/get-all', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        });
        const response2 = await axios.get('batch-service/get-batches', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        });

        if (response) {
          setDashboardData((prev) => {
            return {
              ...prev,
              loading: false,
              imageData: response.data,
              batchData: response2.data,
            };
          });
        }
      } catch (error) {
        if (error.response.status === 400) {
          notifyError('Please try again, an error occured');
        } else if (error.response.data.message) {
          notifyError(
            `${error.response.data.message}, Please Log out and Log in again`
          );
        } else if (error.response.status === 401) {
          notifyError('!Unauthorized, please log out and log in again');
        } else if (error.response.status === 500) {
          notifyError(
            'We are currently experiencing server issues, please try again later'
          );
        } else if (error.response.status === 404) {
          notifyError('Page not found');
        } else {
          notifyError('An error occured!!!');
        }
      } finally {
        /* empty */
      }
    };
    fetchData();
  }, [user]);


  const COLORS = [ '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <div className="images__card">
          <div className="flex gap-6">
            <span style={{ fontSize: '16px' }}>Total Number of Batches</span>
            {/* {dashboarddata.logo} */}
          </div>
          <h3 style={{ marginTop: '20px', fontSize: '24px' }}>
            {dashboarddata?.batchData ? dashboarddata?.batchData?.length : 0}
          </h3>
        </div>
        <div className="images__card">
          <div className="flex gap-6">
            <span style={{ fontSize: '16px' }}>Total Mined Images</span>
          </div>
          <h3 style={{ marginTop: '20px', fontSize: '24px' }}>
            {dashboarddata?.imageData ? dashboarddata?.imageData?.length : 0}
          </h3>
        </div>
        <Link to={'/documentation'}>
          <Button text={'View Documentation'} className="button" />
        </Link>
      </div>
      <div className="api__details">
        <div className="api__details__head"></div>

<ResponsiveContainer width="100%" height="100%">

        <BarChart
          width={500}
          height={300}
          data={BarDataChartLastFiveDays}
          margin={{
            top: 5,
            // right: 10,
            // left: 10,
            bottom: 20,
          }}
          barGap={'10%'}
          title = 'Last Five Days Activity'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey = 'date_created'
          allowDataOverflow = {true}
          label={{ value: 'Date Mined', position: 'bottom', offset: 0, fontSize: '16px',
          fontWeight: 'bold',
          position: 'insideBottomRight', dy: 10,
          fill: '#000000',
          angle: 0

        }}

          />

          <YAxis
          allowDecimals = {false}
          label={{ value: 'Total',
          fontWeight: 'bold',
          position: 'insideLeft',
          fill: '#000000',
          angle: -90,

      }}

          />
          <Tooltip />
          <Legend
          verticalAlign="top"
          height={36}
          iconType="circle"
          />
          <Bar dataKey="Tagged" stackId="a" fill="#FF8042"  />
          <Bar dataKey="Untagged" stackId="a" fill="#2c2b2b" maxBarSize={
            20
          }/>
           <Text

          >
            Last Five Days Activity
          </Text>


        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
