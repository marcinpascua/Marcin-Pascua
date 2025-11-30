import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-[100vw] mx-auto bg-[#000717]">
      {children}
    </div>
  );
}

