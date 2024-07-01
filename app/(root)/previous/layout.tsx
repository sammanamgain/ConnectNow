import React, {ReactNode} from "react";
import SideBar from "@/components/sideBar";
import NavBar from "@/components/navBar";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <NavBar/>
      <div className="flex">
          <SideBar/>
        <section
          className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28
            max-md:pb-14 sm:px-14"
        >
          {children}
        </section>
      </div>
    </main>
  );
}
