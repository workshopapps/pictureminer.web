import React from 'react';
import { DocumentCopy } from 'iconsax-react';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <div className="images__card">
          <div className="flex gap-6">
            <span>Images</span>
          </div>
          <h3>0</h3>
        </div>
        <div className="images__card">
          <div className="flex gap-6">
            <span>API Usage No</span>
          </div>
          <h3>0</h3>
        </div>
        <Link to={'/documentation'}>
          <Button text={'View Documentation'} className="button" />
        </Link>
      </div>
      <div className="api__details">
        <h1>API Details:</h1>
        {[
          { title: 'Authorization Token', details: 'vhvfyavfjvfhjhv' },
          { title: 'API Endpoint', details: 'vhvfyavfjvfhjhv' },
          { title: 'Sample Curl Request', details: 'vhvfyavfjvfhjhv' },
        ].map((item) => (
          <>
            <div className="api__detail">
              <span>{item.title}</span>
              <span>{item.details}</span>
              <span>
                <DocumentCopy size="16" color="#1d1d1d" />
              </span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
