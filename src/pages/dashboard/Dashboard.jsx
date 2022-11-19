import React from 'react';
import { Gallery, DocumentCopy } from 'iconsax-react';
import Button from '../../components/ui/Button';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <div className="images__card">
          <div className="flex gap-6">
            <Gallery size="13" /> <span>Images</span>
          </div>
          <h3>0</h3>
        </div>
        <div className="images__card">
          <div className="flex gap-6">
            <Gallery size="13" /> <span>API Usage No</span>
          </div>
          <h3>0</h3>
        </div>
        <Button text={'View Documentation'} />
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
