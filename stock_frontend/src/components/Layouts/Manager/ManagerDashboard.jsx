import { useEffect, useState } from 'react';
import axios from 'axios';
import TradingViewWidget from "../../TradingViewWidget";


export const ManagerDashboard = () => {

    const [currentDateTime, setCurrentDateTime] = useState('');

    const [topSellingStocks, setTopSellingStocks] = useState([]);
    const [topBuyers, setTopBuyers] = useState([]);

    // const [purchasedStock, setPurchasedStock] = useState(0);
    // const [totalStocks, setTotalStocks] = useState(0);


    useEffect(() => {

        const newRandomPercentage = Math.floor(Math.random() * 101);

        const progressBar = document.getElementById("progress-bar");
        if (progressBar) {
            progressBar.style.background = `conic-gradient(#3498db ${newRandomPercentage}%, red 0%)`;
            progressBar.textContent = `${newRandomPercentage}%`;
        }
    }, []);


    useEffect(() => {

        axios.get("http://localhost:8081/stocks/topStocks").then((res) => {
            setTopSellingStocks(res.data);
        })
        axios.get("http://localhost:8081/user/topUsers").then((res) => {
            setTopBuyers(res.data);
        })

        const updateDateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const optionsTime = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }

            const formattedDateTime = now.toLocaleDateString('en-US', options);
            const formattedTime = now.toLocaleTimeString('en-US', optionsTime);
            setCurrentDateTime(formattedDateTime + ' ' + formattedTime);

        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <section>
            <div>
                <div className="ps-6 pt-6 w-[98%] ">

                    <div className="flex items-center justify-between ">
                        <h1 className=" text-blue-900 font-bold text-3xl">Dashboard</h1>
                        <h3>{currentDateTime}</h3>
                    </div>

                    <div className='w-full mt-4 '>
                        <div className="lg:grid grid-cols-5 gap-2">
                            <div className="col-span-3 border-2 border-gray-300 ">

                                <div className="p-4 h-full flex justify-between items-center">

                                    <div className="flex flex-col h-full justify-center ps-4">
                                        <h3 className='xl:text-2xl text-lg  text-blue-600 font-semibold'>TODAY&apos;s MARKET STATUS AND <br />STOCKS</h3>
                                        <div className="text-md mt-12 text-blue-900 font-semibold">Market&apos;s P/L status :   <span className='text-green-500 '>+13,580.20 <span className='flex bg-gray-100 w-fit px-2 my-2 rounded-lg text-green-600'>+13.8%</span></span></div>
                                        <h1 className='text-[2rem] font-bold text-blue-700'>$1380.460K <span className="block text-sm text-blue-400">+10.3k in last 2 hours</span></h1>
                                    </div>

                                    <div className='bg-red-200 max-w-full min-h-fit'>
                                        <div>
                                            <img className='w-full h-fit' 
                                            src='https://res.cloudinary.com/dfsvudyfv/image/upload/v1695195396/WhatsApp_Image_2023-09-20_at_13.05.12_ppvij3.jpg'
                                            alt='graph' />

                                            </div>
                                    </div>

                                </div>
                            </div>



                            <div className="col-span-2 border-2 border-gray-300">

                                <div className="p-4  h-full "> 
                                    <div className=''>
                                        <h3 className='xl:text-2xl text-lg   text-blue-600 font-semibold'>Today&apos;s total number of stocks in market</h3>
                                    </div>

                                    <div className='lg:flex justify-around w-ful mt-12'>
                                        <div className='w-fit'>
                                            <div className="circle-progress mx-auto w-48 h-48 rounded-full">
                                                <div className="progress-value rounded-full w-full h-full" id='progress-bar'>
                                                    <div id="prog-bar" className='text-3xl'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-4  p-4">
                                            <h4 className="font-bold text-lg text-blue-700">STOCKS : 452</h4>
                                            <div className="flex space-x-2 items-center mt-4">
                                                <div className="w-6 h-6" style={{ backgroundColor: "red" }}></div>
                                                <span className="ml-2">Stocks sold</span>
                                            </div>
                                            <div className="flex space-x-2 items-center mt-2">
                                                <div className="w-6 h-6 bg-blue-500"></div>
                                                <span className="ml-2">Remaining stocks</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div>
                        <div className="border-2 border-gray-300 w-full mt-2 overflow-y-hidden">
                            <TradingViewWidget />

                        </div>
                    </div>

                    <div className="my-2 p-4 w-full border-2 border-gray-300">
                        <div className="lg:flex justify-evenly space-y-6 lg:space-y-0 lg:h-16 max-h-fit py-2 text-center ">
                            <div className='space-y-2'>
                                <h3 className='text-lg text-blue-700 font-bold'>Total Orders</h3>
                                <h3 className='font-bold'>45678</h3>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-lg text-blue-700 font-bold'>Today Orders</h3>
                                <h3 className='font-bold'>568</h3>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-lg text-blue-700 font-bold'>Avg Order Prics</h3>
                                <h3 className='font-bold'>$1.45K</h3>
                            </div>
                            <div className="bg-red-300 max-h-fit w-[2px]"></div>
                            <div className='space-y-2'>
                                <h3 className='text-lg text-blue-700 font-bold'>Today&apos;s Profit</h3>
                                <h3 className='font-bold text-green-600'>+ $299</h3>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-lg text-blue-700 font-bold'>Profit Percentage</h3>
                                <h3 className='font-bold text-green-600'>6%</h3>
                            </div>
                        </div>
                    </div>


                    <div className="my-2 p-4 w-full border-2 border-gray-300">
                        <div className="lg:flex justify-evenly space-y-6 lg:space-y-0 lg:h-16 max-h-fit my-6 text-center ">
                            <div className='space-y-2'>
                                <h3 className='text-2xl text-blue-700 font-bold'>Total Revenue</h3>
                                <h3 className='font-bold text-xl text-green-600'>$4567.34K</h3>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-2xl text-blue-700 font-bold'>Total Users</h3>
                                <h3 className='font-bold text-xl'>9568</h3>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='text-lg text-blue-700 font-bold '>New Users <span className="text-center align-middle bg-gray-200 text-[10px] p-1 rounded-xl text-black">(This month)</span></h3>
                                <h3 className='font-bold text-xl'>1.4K</h3>
                            </div>
                            <div className="bg-red-300 max-h-fit w-[2px]"></div>
                            <div className='space-y-2'>
                                <h3 className='text-2xl text-blue-700 font-bold'>Total Profit</h3>
                                <h3 className='font-bold text-xl text-green-600'>+ $99.3K</h3>
                            </div>

                        </div>
                    </div>


                    <div className="my-2 p-4 w-full border-2 border-gray-300">
                        <div className="p-3 flex w-full ">
                            <div className='w-1/2'>
                                <h3 className="font-bold text-3xl ps-4 text-blue-900">
                                    Top Selling Stocks
                                </h3>
                                <div className='mt-4'>
                                    <div className='p-4 space-y-4 '>
                                        <ul className="list-inside bg-whit px-4 py-2 rounded-lg">
                                            {topSellingStocks.map((stock) => (
                                                <div key={stock.id} className='flex py-2 items-center '>
                                                    <div className="rounded-full w-24 h-24 bg-cover border-2 border-blue-300">
                                                        <img
                                                            className='object-cover w-full h-full rounded-full bg-red-200'
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQf03WDaxdaEtUM19oWCB7r9FbDnwHFzmyxR_O0WKhA&s" alt="" />

                                                    </div>
                                                    <div
                                                        className='mx-8 space-y-4 text-lg text-gray-700 font-bold'
                                                    >
                                                        <p className='tracking-wide'>{stock.name}</p>
                                                        <div className='bg-red-400 w-1/2 h-2 rounded-full'></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-red-300 min-h-full w-[2px]'></div>
                            <div className='w-1/2 ps-4'>
                                <h3 className="font-bold text-3xl ps-4 text-blue-900">
                                    Top Buyers
                                </h3>
                                <div className='mt-4 '>
                                    <div className='flex justify-start space-y-4 pt-4 '>
                                        <ul className='text-2xl space-y-4 text-indigo-500 bg-gray-100 p-2 w-full rounded-xl'>
                                            {topBuyers.map((buyer, index) => (
                                                <li key={index} className="text-blue-700 me-4 font-bold tracking-wide bg-white p-2 rounded-xl text-lg">{buyer}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}




