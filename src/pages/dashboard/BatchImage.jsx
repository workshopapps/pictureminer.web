import { ArrowDown2 } from 'iconsax-react';
import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
// import Modal, { Backdrop } from '../../components/ui/Modal';
// import successIcon from '../../assets/dashboardImageDetails/success-icon.webp';
// import warningIcon from '../../assets/dashboardImageDetails/warning-icon.webp';
// import closeIcon from '../../assets/dashboardImageDetails/close-icon.webp';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import computer from '../../assets/computer.png';
import { notifyError } from '../../utils/notify';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const NoImageComponent = () => {
  return (
    <div className="no__image">
      <p>0 Image mined (no data to show yet)</p>
      <div className="image_wrapper">
        <Link to={'/imageUpload'}>
          <img src={computer} alt="no image" />
        </Link>
      </div>
    </div>
  );
};

const BatchImage = () => {
  const { user } = useContext(UserContext);
  const [batchData, setBatchData] = useState({ loading: false });
  const [showMenu, setShowMenu] = useState(false);
  const batchColumns = [
    {
      name: 'S/No',
      selector: (row) => row.sn,
      sortable: true,
      maxWidth: '100px',
      minWidth: '100px',
    },
    {
      name: 'Batch',
      selector: (row) => row.batch,
      sortable: true,
      flex: 2,
    },
    {
      name: 'Batch ID',
      selector: (row) => row.batchId,
      sortable: true,
      flex: 4,
    },
    {
      name: 'Date Mined',
      selector: (row) => row.dateMined,
      sortable: true,
      flex: 4,
    },
    {
      name: 'Status',
      selector: (cell) => cell.status,
      sortable: true,
      flex: 1,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setBatchData((prev) => {
          return {
            ...prev,
            loading: true,
          };
        });

        const response = await axios.get('batch-service/get-batches', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user.Token}`,
          },
        });

        if (response) {
          const structuredData = response?.data.map((item, index) => {
            return {
              id: item.id,
              sn: index,
              batch: item.name,
              batchId: item.id,
              dateMined: `${item.date_created.split('T')[0]}`,
              status: (
                <Link to={`/images/batch/${item.id}`} className={item.status}>
                  {item.status} &rarr;
                </Link>
              ),
            };
          });
          setBatchData((prev) => {
            return {
              ...prev,
              loading: false,
              tabledata: structuredData,
            };
          });
        }
      } catch (error) {
        notifyError('Unable to mine your batch images');
      } finally {
        setBatchData((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
      }
    };
    fetchData();
  }, [user]);
  console.log(batchData.tabledata);
  return (
    <div className="dashboard_images">
      <div className="dashboard__images__head">
        <h1>Images</h1>
        {/* <div className="relative">
          <Button
            text={'Filter'}
            icon={<ArrowDown2 size={24} color="#FF6C00" />}
            onclick={() => setShowMenu((prev) => !prev)}
            className="button"
            type="secondary"
          />
          <div className={showMenu ? 'show filter' : 'hide filter'}>
            <p>Last two days </p>
            <p>Last 1 week</p>
            <p>Last 1 month</p>
            <p>Last 2 months</p>
          </div>
        </div> */}
      </div>
      <div className="images_table">
        <DataTable
          columns={batchColumns}
          data={batchData.tabledata}
          progressPending={batchData.loading}
          responsive
          striped
          pagination
          noDataComponent={<NoImageComponent />}
          progressComponent={<div className="loader2"></div>}
        />
      </div>
    </div>
  );
};

export default BatchImage;
