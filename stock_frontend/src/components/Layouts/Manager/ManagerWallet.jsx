import axios from "axios";
import { useEffect, useState } from "react";



export const ManagerWallet = () => {
    const [currentBalance, setcurrentBalance] = useState(0);
    const [LastPurchasedAmt, setLastPurchasedAmt] = useState(0);
    const [totalSpentAmount, setTotalSpentAmount] = useState(0);
    const [averageAmountSpentPerStock, setAverageAmountSpentPerStock] = useState([]);

    const [Amt, setAmt] = useState(0);


    useEffect(() => {

        let User = JSON.parse(localStorage.getItem("user"));

        axios.get(`http://localhost:8081/user/wallet?user_name=${User.username}`).then((res) => {
            setcurrentBalance(res.data);
        })
        axios.get(`http://localhost:8081/user/lastPurchased?user_name=${User.username}`).then((res) => {
            setLastPurchasedAmt(res.data);
        })
        axios.get(`http://localhost:8081/user/priceTotalStock?user_name=${User.username}`).then((res) => {
            setTotalSpentAmount(res.data);
        })
        axios.get(`http://localhost:8081/user/stockPricesEach?user_name=${User.username}`).then((res) => {

            const stockPrices = res.data;

            // Calculate the sum of all values in the array
            const sum = stockPrices.reduce((acc, currentValue) => acc + currentValue, 0);

            // Calculate the average
            const average = (sum / stockPrices.length).toFixed(2);


            // Set the average and length of the array to state
            setAverageAmountSpentPerStock(average);
        })

    }, [])


    const handleUploadMoney = () => {

        let User = JSON.parse(localStorage.getItem("user"));


        axios.put(`http://localhost:8081/user/addWallet?name=${User.username}&count=${Amt}`).then((res) => {
            alert("Money Added to Wallet")
        })

    }

    return (
        <div className="w-full bg-gray-100">
            <div className="bg-white shadow-md rounded-lg ps-12 pt-6 w-full pe-6">
                <h1 className="text-gray-600 font-bold text-3xl">Wallet</h1>

                <div className="border-2 border-gray-200 mt-4 p-4 ">
                    <div className="mb-6 space-y-2">
                        <p className="text-gray-600 text-2xl font-bold ">Current Balance:</p>
                        <p className="text-2xl font-bold ps-2 text-blue-500">$ {currentBalance}</p>
                    </div>

                    <div className="mb-6 space-y-2">
                        <p className="text-gray-600 text-2xl font-bold ">Last Purchased Amount:</p>
                        <p className="text-xl font-semibold ps-2 text-green-500">$ {LastPurchasedAmt}</p>
                    </div>

                    <div className="mb-6 space-y-2">
                        <p className="text-gray-600 text-2xl font-bold ">Total Spent Amount:</p>
                        <p className="text-xl font-semibold ps-2 text-red-500">$ {totalSpentAmount}</p>
                    </div>

                    <div className="mb-6 space-y-2">
                        <p className="text-gray-600 text-2xl font-bold ">Average Amount Spent Per Stock:</p>
                        <p className="text-xl font-semibold ps-2">$ {averageAmountSpentPerStock}</p>
                    </div>

                    {/* <div className="mb-6 space-y-2">
                        <p className="text-gray-600 text-2xl font-bold ">Total Profit Amount:</p>
                        <p className="text-xl font-semibold ps-2 text-green-500">${totalProfitAmount}</p>
                    </div>

                    <div className="mb-6 space-y-2">
                        <p className="text-gray-600 text-2xl font-bold ">Amount Lost from Stock:</p>
                        <p className="text-xl font-semibold ps-2 text-red-500">${amountLostFromStock}</p>
                    </div> */}


                    <div className="w-full">
                        <div className="w-full pt-12">
                            <div className="my-6 flex flex-col justify-center items-center">
                                <div className="">
                                    <input
                                        onChange={(e) => setAmt(e.target.value)}
                                        type="text" className="border-2 border-gray-300 rounded-md p-3" placeholder="Add Amount" />

                                </div>
                                <div className="bg-blue-700 rounded-lg px-4 py-2 w-fit my-2 text-white border-2 border-white">
                                    <button
                                        onClick={handleUploadMoney}
                                        className="">Load Money</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
   

    );
};

