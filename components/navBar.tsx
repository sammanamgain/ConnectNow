import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
function NavBar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1 ">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="navbaricon"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          connectNow
        </p>
        <div className="flex-between gap-5">{/*clerk user mangaemenet*/}</div>
        <MobileNav></MobileNav>
      </Link>
    </nav>
  );
}

export default NavBar;
