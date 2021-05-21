import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from 'components/Sidebar/Sidebar';
import Dashboard from 'pages/Dashboard';
import AdminNavbar from 'components/Navbars/AdminNavbar';
import HeaderStats from 'components/Headers/HeaderStats';
import FooterAdmin from 'components/Footers/FooterAdmin';
import Maps from 'pages/Maps';

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            {/*<Route path="/admin/settings" exact component={Settings} />*/}
            {/*<Route path="/admin/tables" exact component={Tables} />*/}
            {/*<Redirect from="/admin" to="/admin/dashboard" />*/}
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default Admin;
