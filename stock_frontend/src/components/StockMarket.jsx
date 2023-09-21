import { useEffect, useState } from 'react';
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import { RiStockFill } from 'react-icons/ri';
import {BsTrash3} from 'react-icons/bs';
import axios from 'axios';


export const StockMarket = () => {
    const [stocks, setStocks] = useState([]);
    const [topSellingStocks, setTopSellingStocks] = useState([])
    const [topBuyers, setTopBuyers] = useState([]);

    // const [buyersCount, setBuyersCount] = useState(0);


    useEffect(() => {
        
        axios.get("http://localhost:8081/stocks").then((res) => {
            setStocks(res.data);
        })
        axios.get("http://localhost:8081/stocks/topStocks").then((res) => {
            setTopSellingStocks(res.data);
        })
        axios.get("http://localhost:8081/user/topUsers").then((res) => {
            setTopBuyers(res.data);
        })
    }, []);



    return (
        <div className="min-h-screen p-8" >

            <div className="mb-8 w-full">
                <h2 className=" text-blue-900 font-bold text-3xl ps-4">Top Selling Stocks:</h2>
                <div
                    className='top-selling-container  bg-green-600 py-2 mt-3'
                >
                    <ul className="list-inside flex bg-white px-4 py-2 rounded-lg">
                        {topSellingStocks.map((stock) => (
                            <li key={stock.id}
                                className='"text-blue-700 me-8 text-lg text-gray-700 font-bold'
                            >
                                {stock.name}: ${stock.stock_price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mb-8 w-full">
                <h2 className=" text-blue-900 font-bold text-3xl ps-4">Top Buyers:</h2>
                <div className="top-buyers-container bg-red-600 py-2 mt-3">
                    <ul className="list-inside flex bg-white px-4 py-2 rounded-lg">
                        {topBuyers.map((buyer, index) => (
                            <li key={index} className="text-blue-700 me-4 text-lg">{buyer}</li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="bg-white shadow-md rounded-lg overflow-x-auto ">
                <div className="w-full">
                    <h1 className="my-4 underline font-bold text-3xl text-blue-900 ms-4 flex items-center ">STOCKS <RiStockFill className='ms-6 '/></h1>
                    <table className="w-9/12 mx-auto text-center font-semibold text-lg table-auto " style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="px-6 py-3 uppercase tracking-wider">
                                    Stock ID
                                </th>
                                <th className="px-6 py-3 uppercase tracking-wider">
                                    Stock Name
                                </th>
                                <th className="px-6 py-3 uppercase tracking-wider">
                                    Stocks Available
                                </th>
                                <th className="px-6 py-3 uppercase tracking-wider">
                                    Stock Price
                                </th>
                                <th className="px-6 py-3 uppercase tracking-wider">
                                    Current Price
                                </th>
                                <th className="px-6 py-3 uppercase tracking-wider">
                                    Buyers
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {stocks && stocks?.map((stock, index) => (
                                <tr key={stock.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-slate-600 text-white'}>
                                    <td className="px-6 py-4">{stock.id}</td>
                                    <td className="px-4 py-4">{stock.name}</td>
                                    <td className="px-6 py-4">{stock.no_of_stocks}</td>
                                    <td className="px-6 py-4">$ {stock.stock_price.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        $ {stock.stock_price.toFixed(2)}
                                        {stock.currentPrice > stock.price ? (
                                            <span className="text-green-500 text-xl ml-4">
                                                <AiOutlineRise />
                                            </span>
                                        ) : stock.currentPrice < stock.price ? (
                                            <span className="text-red-500 text-xl ml-4">
                                                <AiOutlineFall />
                                            </span>
                                        ) : null}
                                    </td>
                                    <td className="px-6 py-4">{stock.buyers}</td>
                                    {/* <td className='text-red-500 bg-red-200 '> */}
                                   
                                        {/* <span className=' bg-gray-100 rounded-sm '> <BsTrash3 /></span></td> */}
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};
