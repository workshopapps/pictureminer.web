import React, { useContext, useEffect, useState } from 'react';
import { DocumentCopy } from 'iconsax-react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { notifyError } from '../../utils/notify';

axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';

const Dashboard = () => {
  const { user } = useContext(UserContext);

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
        <h1>API Details:</h1>
        {[
          { title: 'Authorization Token', details: user ? user.Token : '' },
          {
            title: 'API Endpoint',
            details: 'minergram.hng-9.com',
            class: 'colored',
          },
          { title: 'Sample Curl Request', details: 'vhvfyavfjvfhjhv' },
        ].map((item) => (
          <div key={item.title}>
            <div className="api__detail">
              <span>{item.title}</span>
              <span className={item.class}>{item.details}</span>
              <span
                className="copy"
                onClick={() => navigator.clipboard.writeText(item.details)}
              >
                <DocumentCopy size="16" color="#1d1d1d" />
                <span>copied</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
