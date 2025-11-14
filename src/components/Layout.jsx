import React from "react";

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-gradient-to-r from-[#FFF0D6] to-[#361A23]">
      {children}
    </div>
  );
}

