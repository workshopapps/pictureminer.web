import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/ui/dashboard/DashboardSidebar';
import { TextalignJustifycenter } from 'iconsax-react';

function DashboardLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <div>
      {showSidebar && (
        <div
          className="bg-modalGray lg:bg-transparent z-[5] fixed inset-0 w-full"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="container">
        <div className="pt-5 lg:hidden" onClick={toggleSidebar}>
          <TextalignJustifycenter />
        </div>

        <DashboardSidebar
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
