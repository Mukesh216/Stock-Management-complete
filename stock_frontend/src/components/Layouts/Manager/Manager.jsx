import { useState } from 'react';
import { RiStockFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { SlWallet } from "react-icons/sl";
import { SiMarketo } from "react-icons/si";
import { IoIosAdd } from 'react-icons/io';
import { BiSolidEditAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { LiaHotjar } from 'react-icons/lia';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdNotificationsActive } from 'react-icons/md';
import { ManagerDashboard } from './ManagerDashboard';
import { ManagerStocks } from './ManagerStocks';
import { ManagerAccount } from './ManagerAccount';
import { ManagerWallet } from './ManagerWallet';
import { StockMarket } from '../../StockMarket';


import CreateStockModal from '../model/CreateStockModal';
import EditStockModal from "../model/EditStockModal";



export const Manager = () => {

  const [selectedComponent, setSelectedComponent] = useState('ManagerDashboard');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [IsModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'ManagerDashboard':
        return <ManagerDashboard />;
      case 'RiStockFill':
        return <ManagerStocks />;
      case 'SiMarketo':
        return <StockMarket />;
      case 'SlWallet':
        return <ManagerWallet />;
      case 'VscAccount':
        return <ManagerAccount />;
      default:
        return <ManagerDashboard />;
    }
  }

  //get the user item from local storage
  const user = JSON.parse(localStorage.getItem('user'));


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalUpdate = () => {
    setIsModalOpenUpdate(true);
  };

  const closeModalUpdate = () => {
    setIsModalOpenUpdate(false);
  };


  return (
    <>
      <section>
        <nav>
          <div className="h-screen w-full bg-white relative flex overflow-hidden">
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
              <header className="h-16 w-full bg-blue-100   flex items-center relative justify-between px-5 space-x-10 mb-2">
                <div className="flex  justify-between w-full items-center">

                  <div >
                    <h1
                      style={{ fontFamily: "Archivo Narrow" }}
                      className="text-3xl text-blue-900  font-bold tracking-widest">
                      SKI STOCK MARKET & FUNDS</h1>
                  </div>

                  <div className="flex items-center justify-between w-48  mx-16 ">
                    <div className='border-2 border-blue-700 text-xl rounded-full  p-2'>
                      <MdNotificationsActive />
                    </div>
                    <div className='flex items-center space-x-4'>
                      <div className="flex flex-col">
                        <div className="text-md font-medium text-red-400 ">{user.username}</div>
                        <div className="text-sm font-regular  text-red-400">MANAGER</div>
                      </div>
                      <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400 bg-cover" style={{ backgroundImage: 'url("https://res.cloudinary.com/dfsvudyfv/image/upload/v1693830073/Screenshot_20230904_174405_lol4zx.png")' }}></div>
                    </div>


                  </div>

                </div>

              </header>

              <main className="max-w-full h-full relative overflow-y-scroll">

                <div className="bg-gray-200 xl:text-xl flex justify-center items-center w-full h-16">

                  <ul className="flex gap-10 underline cursor-pointer text-center text-gray-800 font-semibold">
                    <li
                    onClick={
                      () => {
                        setSelectedComponent('SiMarketo');
                      }
                    }
                    >
                      <a >
                        Go to Market
                      </a>
                    </li>
                    <li>
                      <div
                        onClick={openModal}
                      >
                        Create Stock(s)<IoIosAdd className="inline-block text-center align-middle ms-2 text-xl" />
                      </div>

                    </li>
                    <li>
                      <div
                        onClick={openModalUpdate}
                      >

                        Edit Stock(s) <BiSolidEditAlt className="inline-block text-center align-middle ms-2 text-xl" />
                      </div>
                    </li>
                    <li>
                      <div>
                        Current Users In Market <FaUsers className="inline-block text-center align-middle ms-2 text-xl" />
                      </div>
                    </li>
                    <li>
                      <div>
                        Top Buyers <LiaHotjar className="inline-block text-center align-middle ms-2 text-xl" />
                      </div>
                    </li>
                  </ul>

                </div>
                {renderComponent()}

              </main>

            </div>

            {isModalOpen && <CreateStockModal isOpen={isModalOpen} onClose={closeModal} />}
            {IsModalOpenUpdate && <EditStockModal isOpen={openModalUpdate} onClose={closeModalUpdate} />}

          </div>
        </nav>
      </section>
    </>
  )
}
