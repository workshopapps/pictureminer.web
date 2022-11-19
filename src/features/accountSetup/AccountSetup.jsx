import React, { useState } from 'react';
import DashboardSidebar from '../../components/ui/dashboard/DashboardSidebar';
// import Modal from '../../components/ui/Modal';
import AccountSettings from './components/AccountSettings';

function AccountSetup() {
  // const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // const toggleModal = () => {
  //   setShowModal((prevState) => !prevState);
  // };

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <div>
      {showSidebar && (
        <div className="bg-modalGray -z-0 fixed inset-0 w-full"></div>
      )}

      <div className="container z-10">
        {/* {showModal && (
          <Modal onClick={toggleModal}>
            <h2>Hello</h2>
          </Modal>
        )} */}

        <DashboardSidebar
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
        />
        <AccountSettings toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default AccountSetup;
