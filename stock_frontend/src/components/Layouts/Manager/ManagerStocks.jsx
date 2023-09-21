import { useState, useEffect } from 'react';
import { GrMoney } from 'react-icons/gr';
import { RiStockLine } from 'react-icons/ri';
export const ManagerStocks = () => {

  const [userStocks, setUserStocks] = useState([]);
  const [totalAmountSpent, setTotalAmountSpent] = useState(0);
  const [recentlyBoughtStock, setRecentlyBoughtStock] = useState(null);

  const dummyUserStocks = [
    {
      id: 1,
      symbol: 'AAPL',
      name: 'Apple Inc.',
      quantity: 10,
      currentPrice: 150.25,
      purchasePrice: 140.50,
    },
    {
      id: 2,
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      quantity: 5,
      currentPrice: 2700.75,
      purchasePrice: 2650.00,
    },
    {
      id: 3,
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      quantity: 15,
      currentPrice: 305.50,
      purchasePrice: 300.25,
    },
    {
      id: 4,
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      quantity: 8,
      currentPrice: 3350.00,
      purchasePrice: 3300.75,
    },
    {
      id: 5,
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      quantity: 7,
      currentPrice: 750.60,
      purchasePrice: 740.25,
    },
    {
      id: 6,
      symbol: 'FB',
      name: 'Meta Platforms, Inc.',
      quantity: 12,
      currentPrice: 340.75,
      purchasePrice: 335.25,
    },
    {
      id: 7,
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      quantity: 9,
      currentPrice: 220.30,
      purchasePrice: 215.75,
    },
    {
      id: 8,
      symbol: 'NFLX',
      name: 'Netflix, Inc.',
      quantity: 6,
      currentPrice: 590.00,
      purchasePrice: 585.50,
    },
    {
      id: 9,
      symbol: 'PYPL',
      name: 'PayPal Holdings, Inc.',
      quantity: 11,
      currentPrice: 265.75,
      purchasePrice: 260.00,
    },
    {
      id: 10,
      symbol: 'CRM',
      name: 'Salesforce.com, Inc.',
      quantity: 13,
      currentPrice: 270.10,
      purchasePrice: 265.25,
    },
    {
      id: 11,
      symbol: 'GOOG',
      name: 'Alphabet Inc. (Class C)',
      quantity: 4,
      currentPrice: 2695.50,
      purchasePrice: 2685.25,
    },
    {
      id: 12,
      symbol: 'JPM',
      name: 'JPMorgan Chase & Co.',
      quantity: 9,
      currentPrice: 160.75,
      purchasePrice: 158.50,
    },
    {
      id: 13,
      symbol: 'V',
      name: 'Visa Inc.',
      quantity: 7,
      currentPrice: 250.20,
      purchasePrice: 248.75,
    },
    {
      id: 14,
      symbol: 'PG',
      name: 'Procter & Gamble Co.',
      quantity: 14,
      currentPrice: 140.80,
      purchasePrice: 138.50,
    },
    {
      id: 15,
      symbol: 'DIS',
      name: 'The Walt Disney Company',
      quantity: 10,
      currentPrice: 170.45,
      purchasePrice: 168.00,
    },
  ];



  useEffect(() => {
    setUserStocks(dummyUserStocks);

    let totalAmount = 0;
    let highestPrice = 0;
    let recentlyBought = null;

    dummyUserStocks.forEach((stock) => {
      totalAmount += stock.quantity * stock.purchasePrice;

      if (!recentlyBought || stock.purchasePrice > highestPrice) {
        recentlyBought = stock;
        highestPrice = stock.purchasePrice;
      }
    });

    setTotalAmountSpent(totalAmount);
    setRecentlyBoughtStock(recentlyBought);
  }, []);

  return (
    <div className='w-full'>
      <div className=" mx-4  p-4 ms-6 rounded-lg shadow-lg pt-4">

        <div className='w-full'>
          <h2 className="text-blue-900 font-bold text-3xl mb-8 ps-4">Performance Overview</h2>

          <h2 className="text-blue-600 font-bold text-3xl mb-8 ps-4"><span className='bg-slate-200 w-fit px-6 py-2 border-b border-blue-500 shadow-xl rounded-md'>Stock Holdings : </span> </h2>
          <div className='w-full'>
            <table className="w-9/12 mx-auto text-center font-semibold text-lg table-auto " style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
              <thead >
                <tr className="bg-slate-800 text-white">
                  <th className="px-6 py-3">SYMBOL</th>
                  <th className="px-6 py-3">COMPANY NAME</th>
                  <th className="px-6 py-3">QUANTITY</th>
                  <th className="px-6 py-3">CURRENT PRICE</th>
                  <th className="px-6 py-3">PURCHASE PRICE</th>
                  <th className="px-6 py-3">TOTAL VALUE</th>
                  <th className="px-6 py-3">GAIN/LOSS</th>
                </tr>
              </thead>
              <tbody >
                {userStocks.map((stock, index) => (
                  <tr key={stock.id} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-slate-600 text-white'}>
                    <td className="px-6 py-3">{stock.symbol}</td>
                    <td className="px-6 py-3">{stock.name}</td>
                    <td className="px-6 py-3">{stock.quantity}</td>
                    <td className="px-6 py-3">${stock.currentPrice}</td>
                    <td className="px-6 py-3">${stock.purchasePrice}</td>
                    <td className="px-6 py-3">${(stock.quantity * stock.currentPrice).toFixed(2)}</td>
                    <td className={`px-6 py-3 ${stock.quantity * stock.currentPrice - stock.quantity * stock.purchasePrice >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      ${(stock.quantity * stock.currentPrice - stock.quantity * stock.purchasePrice).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center items-center my-16 ">

            <hr className='w-5/12 border border-red-200 ' />
          </div>

          <div className='ps-4 '>
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-700 flex items-center "><span className='bg-slate-200 w-fit px-6 py-2 border-b border-blue-500 shadow-xl rounded-md'>Total Amount Spent </span> <GrMoney className='ms-6 ' /></h2>
            <p className="text-gray-700 xl:ms-12 ms-6 font-semibold text-xl xl:mt-12 mt-6">The total amount spent on stocks since joining : <span className='text-orange-600'>${totalAmountSpent.toFixed(2)}</span></p>


          </div>

          <div className="ps-4 mt-12">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-700 flex items-center"><span className='bg-slate-200 w-fit px-6 py-2 border-b border-blue-500 shadow-xl rounded-md'>Recently Bought Stock </span> <RiStockLine className='ms-6 text-black ' /></h2>
            {recentlyBoughtStock ? (
              <div className='text-xl font-semibold xl:ms-12 ms-6 xl:mt-12 mt-6'>
                <p className="text-gray-700">Stock Symbol: {recentlyBoughtStock.symbol}</p>
                <p className="text-gray-700">Company Name: {recentlyBoughtStock.name}</p>
                <p className="text-gray-700">Purchase Price: ${recentlyBoughtStock.purchasePrice}</p>
              </div>
            ) : (
              <p className="text-red-700">No recent stock purchases</p>
            )}

          </div>


          <div className="ps-4 mt-12">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-700 "><span className='bg-slate-200 w-fit px-6 py-2 border-b border-blue-500 shadow-xl rounded-md'>Transaction History </span></h2>
            <div className="bg-gray-100 w-9/12 mx-auto xl:mt-12 mt-6 p-4 text-xl rounded-lg shadow-lg">
              <ul className="list-disc pl-8">
                <li className="text-gray-700">Bought 10 shares of AAPL on 2023-09-10</li>
                <li className="text-gray-700">Sold 5 shares of GOOGL on 2023-09-09</li>
              </ul>
            </div>
          </div>

          <div className="ps-4 mt-12">
            <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-700"><span className='bg-slate-200 w-fit px-6 py-2 border-b border-blue-500 shadow-xl rounded-md'>Investment Insights </span></h2>
            <div className="bg-gray-100 w-9/12 mx-auto mt-6 p-4 rounded-lg shadow-lg">
              <p className="text-gray-700 font-semibold">
                Based on your portfolio, you are currently diversified across various tech companies.
                Consider analyzing your portfolio further to optimize your investments.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};


