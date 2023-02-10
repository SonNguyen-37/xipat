import React from "react";
import NavSide from "../components/NavSide";

export default function BaseLayout({ children }: any) {
  return (
    <div className="base-layout">
      <NavSide />
      <div className="content">{children}</div>
    </div>
  );
}
