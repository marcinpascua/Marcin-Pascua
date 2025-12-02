import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#000717] overflow-x-hidden w-full">
      {children}
    </div>
  );
}

