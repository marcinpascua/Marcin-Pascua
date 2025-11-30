import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen mx-auto bg-[#000717]">
      {children}
    </div>
  );
}

