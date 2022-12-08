import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import useGetBatch from '../../Hooks/useGetBatch';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { response:batchImages } = useGetBatch();
  console.log(batchImages);
  const totalBatchImages = batchImages?.length;
  // const untagged = batchImages?.map(item => item.tags).filter(tags => tags[0] === 'null').length;
  // console.log(untagged);

  const taggedLength = batchImages?.map(item => item.tags).filter(tags => tags[0] !== 'null').length;
  const untaggedLength = batchImages?.map(item => item.tags).filter(tags => tags[0] === 'null').length;

  const taggedAndUntaggedData = [{
    name: 'Tagged',
    value: taggedLength,
  },
  {
    name: 'Untagged',
    value: untaggedLength,
  }];



  console.log(taggedAndUntaggedData);


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

        if (response) {
          setDashboardData((prev) => {
            return {
              ...prev,
              loading: false,
              imageData: response.data,
            };
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        /* empty */
      }
    };
    fetchData();
  }, [user]);

  console.log(dashboarddata);

  const totalSingleImages = dashboarddata?.imageData?.length;
  const barData = [
    {
      name: 'Batch upload',
      'Total Batch Upload': totalBatchImages,
    },
    {
      name: 'Tag',
      'Tagged': taggedLength,
      'Untagged': untaggedLength,

    }
];
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
            {dashboarddata?.imageData ? dashboarddata?.imageData?.length : null}
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
          data={barData}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total Batch Upload" fill="#8884d8" />
          <Bar dataKey="Tagged" fill="#82ca9d" />
          <Bar dataKey="Untagged" fill="#FF8042" />
        </BarChart>
        </ResponsiveContainer>



      </div>
    </div>
  );
};

export default Dashboard;
