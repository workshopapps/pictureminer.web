import React from 'react';
import MinegramLogo from '../../../assets/Minergram-logo.svg';
import { Element3, Gallery, Triangle } from 'iconsax-react';

function DashboardSidebar({ showSidebar, toggleSidebar }) {
  return (
    <aside
      className={`w-60 pt-8 h-screen fixed inset-y-0 left-0 -translate-x-full bg-white transition-transform duration-300 ease-out ${
        showSidebar && 'translate-x-0'
      }`}
    >
      <img src={MinegramLogo} alt="" className="pl-6" onClick={toggleSidebar} />
      <div className="mt-14 space-y-10">
        <div className="dashboardSidebarLinks">
          <div className="pl-6">
            <Element3 />
          </div>
          <h3 className="text-small">Dashboard</h3>
        </div>
        <div className="dashboardSidebarLinks">
          <div className="pl-6">
            <Gallery />
          </div>
          <h3>Images</h3>
        </div>
        <div className="dashboardSidebarLinks">
          <div className="pl-6">
            <Triangle />
          </div>
          <h3>Billing</h3>
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
