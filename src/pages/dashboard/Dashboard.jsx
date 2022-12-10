import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import useGetBatch from '../../Hooks/useGetBatch';
import {
  ResponsiveContainer,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from 'recharts';
import { notifyError } from '../../utils/notify';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { response: batchImages } = useGetBatch();

  const totalBatchImages = batchImages?.length;

  const taggedLength = batchImages
    ?.map((item) => item.tags)
    .filter((tags) => tags[0] !== 'null').length;
  const untaggedLength = batchImages
    ?.map((item) => item.tags)
    .filter((tags) => tags[0] === 'null').length;

  const taggedAndUntaggedData = [
    {
      name: 'Tagged',
      value: taggedLength,
    },
    {
      name: 'Untagged',
      value: untaggedLength,
    },
  ];

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

  const totalSingleImages = dashboarddata?.imageData?.length;
  const barData = [
    {
      name: 'Batch upload',
      'Total Batch Upload': totalBatchImages,
    },

    {
      name: 'Tag',
      Tagged: taggedLength,
      Untagged: untaggedLength,
    },
  ];

  const COLORS = ['#FFBB28', '#FF8042'];
  const dates = dashboarddata.imageData.map((item) => {
    return item.date_created.split('T')[0];
  });
  const formatedDate = dates.sort().reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
  const singleBarData = Object.keys(formatedDate).map((item) => {
    return {
      name: item,
      'Total Images': formatedDate[item],
    };
  });
  console.log(singleBarData, barData);
  return (
    <div className="dashboard">
      <Tabs>
        <TabList className={'tablist'}>
          <Tab className={'tab'} selectedClassName={'active__tab'}>
            Batch Upload
          </Tab>
          <Tab className={'tab'} selectedClassName={'active__tab'}>
            Single Upload
          </Tab>
        </TabList>
        <TabPanel>
          <div className="dashboard__head">
            <div className="images__card">
              <div className="flex gap-6">
                <span style={{ fontSize: '16px' }}>
                  Total Number of Batches
                </span>
              </div>
              <h3 style={{ marginTop: '20px', fontSize: '24px' }}>
                {dashboarddata?.batchData
                  ? dashboarddata?.batchData?.length
                  : 0}
              </h3>
            </div>
          </div>
          {/* This is where the new batch bar chart is */}
          <div className="api__details">
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
        </TabPanel>
        <TabPanel>
          <div className="dashboard__head">
            <div className="images__card">
              <div className="flex gap-6">
                <span style={{ fontSize: '16px' }}>Total Mined Images</span>
              </div>
              <h3 style={{ marginTop: '20px', fontSize: '24px' }}>
                {dashboarddata?.imageData
                  ? dashboarddata?.imageData?.length
                  : 0}
              </h3>
            </div>
          </div>
          <div className="api__details">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={singleBarData}
                margin={{
                  top: 5,
                  right: 2,
                  left: 2,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Total Images" fill="#ff6c00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
