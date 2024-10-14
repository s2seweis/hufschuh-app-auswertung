"use client";

import { useSelector } from "react-redux";
import React from "react";
import AuthBoxComponent from "./AuthBox/AuthBox";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore
  const authState = useSelector((state) => state.auth);

  if (authState.user) {
    return <>{children}</>;
  } else {
    // @ts-ignore
    return <AuthBoxComponent mode={"login"} />;
  }
};
