import React, { useContext, useEffect, useState } from 'react';
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
  Text,
} from 'recharts';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';
import Select from 'react-select';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { response: batchImages } = useGetBatch();
  const { response: countProcess } = useGetBatch(
    'https://discripto.hng.tech/api1/api/v1/batch-service/count-process',
    'count'
  );
  // const xLabelAngle = window.innerWidth < 500 ? -45 : 0;

  const options = [
    { value: 5, label: 'Last 5 Days Activity' },
    { value: 7, label: 'Last 7 Days Activity' },
    { value: 30, label: 'Last 30 Days Activity' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const BatchImageChartData = batchImages?.data
    .filter((item) => {
      const date = new Date(item.date_created);
      const today = new Date();
      const diffTime = Math.abs(today - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= selectedOption.value;
    })
    ?.map((batch) => {
      return {
        id: batch.id,
        Tagged: batch.tagged,
        Untagged: batch.untagged,
        total: batch.total,
        date_created: new Date(batch.date_created).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };
    });

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

  return (
    <div className="dashboard">
      {countProcess && (
        <div
          className="flex md:flex-row flex-col
        justify-between gap-4
        items-center
        w-full
        p-4
        bg-white
        rounded-lg
        shadow-md
        mb-4
        text-gray-600

        "
        >
          <div>
            {' '}
            {countProcess.mined_this_month +
              Math.abs(countProcess.remaining_to_mine)}{' '}
            free mines{' '}
          </div>
          <div> {countProcess.mined_this_month} free mines used </div>
          <div>
            {' '}
            {Math.abs(countProcess.remaining_to_mine)} free mines remaining{' '}
          </div>
        </div>
      )}

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
          <div className="api__details">
            {/* This is where the new batch bar chart is */}
            <Select
              styles={{
                control: (base, state) => ({
                  ...base,
                  // match with the menu
                  // overflows to show it's contents
                  overflow: 'visible',
                  // border: '1px solid red',
                  // match with the menu
                  display: 'flex',
                  // match with the menu
                  alignItems: 'center',
                  marginBottom: '30px',

                  borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
                  // Overwrittes the different states of border
                  borderColor: state.isFocused ? '#FFBB28' : '#FFBB28',
                  // Removes weird border around container
                  boxShadow: state.isFocused ? null : null,
                  '&:hover': {
                    // Overwrittes the different states of border
                    borderColor: state.isFocused ? '#FFBB28' : '#FFBB28',
                  },
                }),
              }}
              options={options}
              value={selectedOption}
              onChange={handleChange}
            />

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={'100%'}
                height={'100%'}
                data={BatchImageChartData}
                margin={{
                  top: 5,
                  // right: 10,
                  // left: 10,
                  bottom: 20,
                }}
                title="Total Image mined"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date_created"
                  allowDataOverflow={true}
                  label={{
                    value: 'Date Mined',
                    position: 'bottom',
                    offset: 0,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    position: 'insideBottomRight',
                    dy: 10,
                    fill: '#000000',
                    angle: 0,
                  }}
                />

                <YAxis
                  allowDecimals={false}
                  //     label={{ value: 'Total',
                  //     fontWeight: 'bold',
                  //     position: 'insideLeft',
                  //     fill: '#000000',
                  //     angle: -90,

                  // }}
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Bar
                  dataKey="Tagged"
                  stackId="a"
                  fill="#FF8042"
                  maxBarSize={50}
                />
                <Bar
                  dataKey="Untagged"
                  stackId="a"
                  fill="#2c2b2b"
                  maxBarSize={50}
                />
                <Text>Last Five Days Activity</Text>
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
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}
                barSize={70}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, 'dataMax + 2']} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Total Images" fill="#FF9D55" minPointSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
