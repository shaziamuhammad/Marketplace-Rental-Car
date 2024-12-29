import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-auto  w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white">
      {/* Logo */}
      <div className="w-[120px] h-[40px] flex-shrink-0">
        <Image
          src="/Logo.png"
          alt="Logo"
          className="w-full h-full object-contain ml-4"
        />
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
        <Image
          src="/search-normal.png"
          alt="Search"
          className="w-[20px] h-[20px]"
        />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none outline-none text-sm px-2 w-[492px] h-[44px]"
        />
        <Image src="/filter.png" alt="Filter" className="w-[20px] h-[20px]" />
      </div>

      {/* Profile Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <a href="#">
          <Image src="/Like.png" alt="Like" className="w-[36px] h-[36px]" />
        </a>
        <a href="#">
          <Image
            src="/Notification.png"
            alt="Notification"
            className="w-[36px] h-[36px]"
          />
        </a>
        <a href="#">
          <Image
            src="/Settings.png"
            alt="Settings"
            className="w-[36px] h-[36px]"
          />
        </a>
        <a href="#">
          <Image
            src="/profile.png"
            alt="profile"
            className="w-[44px] h-44px rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
