import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import BadgeIcon from '@mui/icons-material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarState } from '../redux/sidebarSlice';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '../redux/userSlice';
function SideBar() {
  const username=useSelector((state)=>state.user.user);
  const nav=useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState('Home');
  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };
  const dispatch=useDispatch();
  const handleLogout=()=>{
    if(window.confirm("Are You sure to logout?")){
    dispatch(logout());
    nav("/")
  }
}
  const isSidebarOpen = useSelector(selectSidebarState);
  return (
    <>
    {username? (<>
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'menu2'}`}>
      <Sidebar>
      {isSidebarOpen ? (
          <Menu className="menu">
          <>
          <MenuItem  style={{ backgroundColor: activeMenuItem === 'Home' ? '#aaa7a7' : 'transparent',borderRadius:50}} component={<Link to="/home" />} icon={<HomeIcon />} onClick={() => handleMenuItemClick('home')}>Home</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Dashboard' ? '#aaa7a7' : 'transparent',borderRadius:50}}  component={<Link to="/admin-dashboard" />} icon={<SpaceDashboardIcon />} onClick={() => handleMenuItemClick('Dashboard')}>Dashboard</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Categories' ? '#aaa7a7' : 'transparent',borderRadius:50}} component={<Link to="/categories" />} icon={<LibraryBooksIcon />} onClick={() => handleMenuItemClick('Categories')}>Categories</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'brand' ? '#aaa7a7' : 'transparent',borderRadius:50}} component={<Link to="/brand" />} icon={<BadgeIcon />} onClick={() => handleMenuItemClick('brand')}>Brands</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Settings' ? '#aaa7a7' : 'transparent',borderRadius:50}} component={<Link to="/settings" />} icon={<SettingsIcon />} onClick={() => handleMenuItemClick('Settings')}>Settings</MenuItem>
              <MenuItem  style={{ backgroundColor: activeMenuItem === 'Reports' ? '#aaa7a7' : 'transparent',borderRadius:50}} component={<Link to="/reports" />} icon={<ImportContactsIcon />} onClick={() => handleMenuItemClick('Reports')}>Reports</MenuItem>
             
             
             
             
             
              <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>



             
   
            </></Menu>
          ) : (
              <Menu className="menu2">
              <>
              
              <MenuItem  style={{ color: activeMenuItem === 'Home' ? '#aaa7a7' : 'black',borderRadius:50}} component={<Link to="/home" />} icon={<HomeIcon />} onClick={() => handleMenuItemClick('Home')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Dashboard' ? '#aaa7a7' : 'black',borderRadius:50}}  component={<Link to="/admin-dashboard" />} icon={<SpaceDashboardIcon />} onClick={() => handleMenuItemClick('Dashboard')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Categories' ? '#aaa7a7' : 'black',borderRadius:50}} component={<Link to="/categories" />} icon={<LibraryBooksIcon />} onClick={() => handleMenuItemClick('Categories')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Brand' ? '#aaa7a7' : 'black',borderRadius:50}} component={<Link to="/brand" />} icon={<BadgeIcon />} onClick={() => handleMenuItemClick('Brand')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Settings' ? '#aaa7a7' : 'black',borderRadius:50}} component={<Link to="/settings" />} icon={<SettingsIcon />} onClick={() => handleMenuItemClick('Settings')}></MenuItem>
              <MenuItem  style={{ color: activeMenuItem === 'Reports' ? '#aaa7a7' : 'black',borderRadius:50}} component={<Link to="/reports" />} icon={<ImportContactsIcon />} onClick={() => handleMenuItemClick('Reports')}></MenuItem>
              
              
              
              
              
              <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
              

              </>
              </Menu>
          )}
      </Sidebar>
      </div>
    </>):(<></>)}
    </>
  );
}

export default SideBar;
