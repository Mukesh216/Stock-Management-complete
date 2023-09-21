import { useState } from 'react';
import { RiStockFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { SlWallet } from "react-icons/sl";
import { SiMarketo } from "react-icons/si";
import { LuLayoutDashboard } from 'react-icons/lu';

import { StockMarket } from '../../StockMarket';

import { UserDashboard } from './UserDashboard';


export const User = () => {

  const [selectedComponent, setSelectedComponent] = useState('ManagerDashboard');


  const renderComponent = () => {
    switch (selectedComponent) {
      case 'ManagerDashboard':
        return <UserDashboard />;
      case 'RiStockFill':
        return null;
      case 'SiMarketo':
        return <StockMarket />;
      case 'SlWallet':
        return null;
      case 'VscAccount':
        return null;
      default:
        return null;
    }
  }


  const user = JSON.parse(localStorage.getItem('user'));



  return (
    <>
      <section>
        {/* Navbar */}
        <nav>
          <div className="h-screen w-full bg-white relative flex overflow-hidden">

            {/* <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <SiMarketo className="text-2xl" />

              </div>

              <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <RiStockFill className="text-2xl" />
              </div>

              <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <SlWallet className="text-2xl" />
              </div>

              <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                <VscAccount className="text-2xl" />

              </div>
            </aside> */}

            <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">

              <button
                onClick={
                  () => {
                    setSelectedComponent('ManagerDashboard');
                  }
                }
                className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer  active:bg-white focus:text-gray-800 focus:bg-white hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear ">
                <LuLayoutDashboard className="text-2xl" />

              </button>

              <button
                onClick={
                  () => {
                    setSelectedComponent('SiMarketo');
                  }
                }
                className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer  active:bg-white focus:text-gray-800 focus:bg-white hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear ">

                <SiMarketo className="text-2xl" />

              </button>

              <button
                onClick={
                  () => {
                    setSelectedComponent('RiStockFill');
                  }
                }
                className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer active:bg-white focus:text-gray-800 focus:bg-white hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear ">
                <RiStockFill className="text-2xl" />
              </button>

              <button
                onClick={
                  () => {
                    setSelectedComponent('SlWallet');
                  }
                }
                className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer active:bg-white focus:text-gray-800 focus:bg-white hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear ">
                <SlWallet className="text-2xl" />
              </button>

              <button
                onClick={
                  () => {
                    setSelectedComponent('VscAccount');
                  }
                }
                className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer  active:bg-white focus:text-gray-800 focus:bg-white hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear ">
                <VscAccount className="text-2xl" />
              </button>
            </aside>



            <div className="w-full h-full flex flex-col justify-between">
              <header className="h-16 w-full py-12 flex items-center relative justify-end px-5 space-x-10">
                <div className="flex flex-shrink-0 me-6 items-center space-x-4 text-white">

                  <div className="flex flex-col items-end ">
                    <div className="text-md font-medium text-red-400 ">{user.username}</div>
                    <div className="text-sm font-regular  text-red-400"># RANK</div>
                  </div>

                  <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
                </div>
              </header>

              <main>
                {renderComponent()}
              </main>

            </div>

          </div>
        </nav>
      </section>
    </>
  )
}
