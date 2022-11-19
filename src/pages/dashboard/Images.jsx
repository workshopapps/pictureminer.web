import { ArrowDown2, Trash } from 'iconsax-react';
import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import foodImage from '../../assets/foodImage.png';

const data = [
  {
    id: 1,
    sn: 1,
    picture: <img src={foodImage} alt="" />,
    pictureId: '#123445k',
    dateMined: '12/12/2022',
    details: <Link to={`${1}`}>View More</Link>,
  },
  {
    id: 2,
    sn: 2,
    picture: <img src={foodImage} alt="" />,
    pictureId: '#123445k',
    dateMined: '12/12/2022',
    details: <Link to={`/${2}`}>View More</Link>,
  },
  {
    id: 3,
    sn: 3,
    picture: <img src={foodImage} alt="" />,
    pictureId: '#123445k',
    dateMined: '12/12/2022',
    details: <Link to={`/${3}`}>View More</Link>,
  },
  {
    id: 4,
    sn: 4,
    picture: <img src={foodImage} alt="" />,
    pictureId: '#123445k',
    dateMined: '12/12/2022',
    details: <Link to={`${4}`}>View More</Link>,
  },
  {
    id: 5,
    sn: 5,
    picture: <img src={foodImage} alt="" />,
    pictureId: '#123445k',
    dateMined: '12/12/2022',
    details: (
      <Link to={`images/${5}`} className="view__more">
        View More
      </Link>
    ),
  },
];

const Images = () => {
  const [dataS, setDataS] = useState(data);
  const [showMenu, setShowMenu] = useState(false);
  const columns = [
    {
      name: 'S/No',
      selector: (row) => row.sn,
      sortable: true,
      flex: 2,
    },
    {
      name: 'Picture',
      selector: (row) => row.picture,
      sortable: true,
      flex: 2,
    },
    {
      name: 'Picture ID',
      selector: (row) => row.pictureId,
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
      name: 'Details',
      cell: () => <Link to={`${1}`}>View More</Link>,
      sortable: true,
      flex: 1,
      right: true,
    },
    {
      cell: () => (
        <div
          className="delete"
          onClick={() =>
            setDataS((prev) => {
              console.log(
                prev.filter((item) => {
                  item.id;
                })
              );
              // return prev.filter((item) => {
              //   item.id === 1;
              // });
            })
          }
        >
          <Trash size={24} color="#f04438" />
        </div>
      ),
      selector: (row) => row.dateMined,
      sortable: true,
      width: '50px',
    },
  ];
  return (
    <div className="dashboard_images">
      <div className="dashboard__images__head">
        <h1>Images</h1>
        <div className="relative">
          <Button
            text={'Filter'}
            icon={<ArrowDown2 size={24} color="#FF6C00" />}
            onclick={() => setShowMenu((prev) => !prev)}
            className="button"
          />
          <div className={showMenu ? 'show filter' : 'hide filter'}>
            <p>Last two days </p>
            <p>Last 1 week</p>
            <p>Last 1 month</p>
            <p>Last 2 months</p>
          </div>
        </div>
      </div>
      <div className="images_table">
        <DataTable columns={columns} data={dataS} responsive striped />
        <div className="flex justify-end">
          <div className="pagination">
            <div className="prev">Prev</div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <div className="prev">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
