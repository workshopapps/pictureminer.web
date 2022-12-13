import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import useGetBatch from '../../Hooks/useGetBatch';
import { Link } from 'react-router-dom';
import { SlCheck } from 'react-icons/sl';
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
  const [upgrade, setUpgrade] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const dropdown = () => {
    return setUpgrade(!upgrade);
  };
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
      {Math.abs(countProcess?.remaining_to_mine) < 3 && (
        <div className="moving__warrnig__text">
          You have {Math.abs(countProcess?.remaining_to_mine)} free mines left,
          upgrade your account to continue mining
        </div>
      )}
      {/* {countProcess && (
        <div
          className="flex md:flex-row md:hidden
        justify-between
        items-center
        w-full
        py-4
        bg-white
        rounded-lg
        shadow
        mb-8
        text-gray-800
        max-[768px]:flex-row
        max-[768px]:p-2
        max-[768px]:text-[13px]
        max-[768px]:font-[600]"
        >
          <div className="active:border-b-2">Regular Account </div>
          <div>
            {Math.abs(countProcess.remaining_to_mine)}{' '}
            <span>Free Mines left</span>
          </div>
          <div
            className="cursor-pointer hover:text-[#FF9D55] active:border-b-2 active:border-[#FF9D55]"
            onClick={() => setUpgrade((prevState) => !prevState)}
          >
            Upgrade Account{' '}
          </div>
        </div>
      )} */}
      {upgrade !== false ? (
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-2xl text-center  bg-[#FFE2CC] rounded-lg border border-gray-100 shadow xl:py-8">
              <div className="flex justify-between items-baseline mt-8">
                <h3 className="mb-4 text-large font-semibold">Standard</h3>
                <div>
                  <span className="mr-2 text-normal font-extrabold">
                    {isChecked ? '$14' : '$148'}
                  </span>
                  {!isChecked && <p className="mt-1 line-through">$168</p>}
                </div>
              </div>
              <div className="w-20 border-2 border-mainOrange border-solid"></div>
              {/* List items  */}
              <ul role="list" className="mb-8 mt-16 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>6 GB free storage space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>25 image categorization </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Image upload not more than 100MB</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>Faster processing speed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>24/7 customer support </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />{' '}
                  <span>Access to CSV file upload</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />{' '}
                  <span>Access to detailed dashboard </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />{' '}
                  <span>Download of 10 categorized items</span>
                </li>
              </ul>
              <Link
                to={`/pricing/standard${isChecked}`}
                className="w-[50%] md:w-[60%] mt-16 max-[768px]:m-auto text-white bg-mainOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-5 text-center flex items-center space-x-4 hover:bg-white hover:text-[#FF6C00] "
              >
                {' '}
                <span className="text-small m-auto"> Activate</span>
              </Link>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-[#FFE2CC] xl:py-8 ">
              <div className="flex justify-between items-baseline mt-8">
                <h3 className="mb-4 text-large font-semibold">Premium</h3>
                <div>
                  <span className="mr-2 text-normal font-extrabold">
                    {isChecked ? '$25' : '$422'}
                  </span>
                  {!isChecked && <p className="mt-1 line-through">$480</p>}
                </div>
              </div>
              <div className="w-20 border-2 border-mainOrange border-solid"></div>
              {/* List items  */}
              <ul role="list" className="mb-8 mt-16 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Unlimited free storage space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>200 image categorization </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Image upload not more than 200MB</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>Faster processing speed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>24/7 customer support </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Access to CSV file upload</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Download of 50 categorized items</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Access to collaborating with your team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>
                    Downloads of categorized and procesessed CSV files
                  </span>
                </li>
              </ul>
              <Link
                to={`/pricing/premium${isChecked}`}
                className="w-[50%] md:w-[60%] max-[768px]:m-auto text-mainOrange bg-lightOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-5 text-center flex items-center space-x-4 hover:bg-[#FF6C00] hover:text-white "
              >
                <span className="text-small m-auto"> Activate</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Tabs>
          <TabList className={'tablist dashboard_tablist'}>
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
                  <Bar
                    dataKey="Total Images"
                    fill="#FF9D55"
                    minPointSize={10}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabPanel>
        </Tabs>
      )}
    </div>
  );
};

export default Dashboard;
