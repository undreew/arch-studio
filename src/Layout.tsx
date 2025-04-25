import React from "react";
import { Outlet } from "react-router";
import { Page } from "./components/page";

const Layout: React.FC = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  );
};

export default Layout;
