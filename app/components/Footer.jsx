import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center">
        <span className="text-lg">&lt; /&gt;</span>
        <p className="text-slate-600 mt-2 md:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
