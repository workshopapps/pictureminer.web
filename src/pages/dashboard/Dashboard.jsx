import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import useGetBatch from '../../Hooks/useGetBatch';
import { ResponsiveContainer, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, LabelList} from 'recharts';
import { notifyError } from '../../utils/notify';

axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { response:batchImages } = useGetBatch();
  
  const BarData = [
    {
      "id": "638b70f437a213abb85cb30a",
      "tagged" : 1,
       "untagged" : 3,
       "total" : 4,
      "date_created": new Date("2022-12-03T15:53:24.196Z").toLocaleDateString('en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }),
    },
    {
      "id": "638b70f437a213abb85cb30a",
      "tagged" : 1,
       "untagged" : 3,
       "total" : 4,
      "date_created": new Date("2022-12-03T15:53:24.196Z").toLocaleDateString('en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }),
    },
    {
      "id": "638b70f437a213abb85cb30a",
      "tagged" : 1,
       "untagged" : 3,
       "total" : 4,
      "date_created": new Date("2022-12-03T15:53:24.196Z").toLocaleDateString('en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }),
    },
    {
      "id": "638b70f437a213abb85cb30a",
      "tagged" : 1,
       "untagged" : 3,
       "total" : 4,
      "date_created": new Date("2022-12-04T15:53:24.196Z").toLocaleDateString('en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }),
    },
    {
      "id": "638b70f437a213abb85cb30a",
      "tagged" : 1,
       "untagged" : 3,
       "total" : 4,
      "date_created": new Date("2022-12-05T15:53:24.196Z").toLocaleDateString('en-US',
      { month: 'short', day: 'numeric', year: 'numeric' }),
    },
    
     ]
  
  


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
          notifyError(error.response.data.message);
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
        <div className="api__details__head">

        </div>
        {/* <ResponsiveContainer width="100%" height="100%">

          <PieChart>
            <Pie
              data={taggedAndUntaggedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label = {({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}



            >

            { taggedAndUntaggedData.map((entry, index) => (  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)) }
            </Pie>
            <Legend />


          </PieChart>
        </ResponsiveContainer> */}
<ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={BarData}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey = 'date_created'
          label={{ value: 'Date Mined', position: 'bottom', offset: 0, fontSize: '16px',
          fontWeight: 'bold',
          position: 'insideBottomRight', dy: 10,
          fill: '#000000'

        }}
          
          />
          <YAxis 
          label={{ value: 'Total', 
          fontWeight: 'bold',
          position: 'insideLeft',
          fill: '#000000',
          angle: -90
      }}
          
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="tagged" stackId="a" fill="#8884d8"  >
          <LabelList dataKey="tagged" position="top" />
          </Bar>
          <Bar dataKey="untagged" stackId="a" fill="#82ca9d" >
          <LabelList dataKey="untagged" position="top" />
          </Bar>
         

        </BarChart>
        </ResponsiveContainer>



      </div>
    </div>
  );
};

export default Dashboard;
