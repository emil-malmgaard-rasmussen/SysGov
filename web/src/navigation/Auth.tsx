import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthNavbar from 'components/Navbars/AuthNavbar';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Footer from 'components/Footers/Footer';
import FooterAdmin from 'components/Footers/FooterAdmin';

export default function Auth() {
  return (
    <>
      <AuthNavbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          />
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Signup} />
            {/*<Redirect from="/auth" to="/auth/login" />*/}
          </Switch>
        </section>
          {/*<Footer/>*/}
          <FooterAdmin />

      </main>
    </>
  );
}
