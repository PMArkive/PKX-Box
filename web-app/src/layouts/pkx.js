import React from "react";
import { MainLayout } from "./main";

export const PKXLayout = ({ children }) => {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};
