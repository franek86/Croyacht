import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/index.jsx";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className='hero'>
        <div className='hero__content'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default PublicLayout;
