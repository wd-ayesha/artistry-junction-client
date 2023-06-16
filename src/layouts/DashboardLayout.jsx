import {
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {
            isAdmin ? <>
             <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/setected">
              <FaCalendarAlt></FaCalendarAlt>Manage Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet>Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers">
              <FaUsers></FaUsers>All Users 
            </NavLink>
          </li>
            </> : <>
            <li>
            <NavLink to="/">
            <FaHome></FaHome> Home
            </NavLink>
          </li>
            </>
          }
         
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
