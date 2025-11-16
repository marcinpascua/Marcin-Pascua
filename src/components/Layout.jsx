import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-[100vw] mx-auto bg-gradient-to-r from-[#FFF0D6] to-[#361A23]">
      {children}
    </div>
  );
}

