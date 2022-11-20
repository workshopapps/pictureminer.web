import React from 'react';
import { DocumentCopy } from 'iconsax-react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
// import copy from 'copy-to-clipboard';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <div className="images__card">
          <div className="flex gap-6">
            <span style={{ fontSize: '16px' }}>Images</span>
          </div>
          <h3 style={{ marginTop: '20px', fontSize: '24px' }}>0</h3>
        </div>
        <div className="images__card">
          <div className="flex gap-6">
            <span style={{ fontSize: '16px' }}>API Usage No</span>
          </div>
          <h3 style={{ marginTop: '20px', fontSize: '24px' }}>0</h3>
        </div>
        <Link to={'/documentation'}>
          <Button text={'View Documentation'} className="button" />
        </Link>
      </div>
      <div className="api__details">
        <h1>API Details:</h1>
        {[
          { title: 'Authorization Token', details: 'vhvfyavfjvfhjhv' },
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
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
