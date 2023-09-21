import { useEffect, useState } from 'react';
import axios from 'axios';

const EditStockModal = ({ isOpen, onClose }) => {

    const [Id, setId] = useState("");
    const [showStock, setShowStock] = useState(false);
    const [stockData, setStockData] = useState({
        name: null,
        stock_price: null,
        no_of_stocks: null,
        id: null
    });

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {

    }, [stockData])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8081/stocks/find?id=${Id}`).then((res) => {
            console.log("stock= ", res.data);
            setStockData(res.data);
            setName(res.data.name)
            setPrice(res.data.stock_price)
            setQuantity(res.data.no_of_stocks);
            // Store the fetched data
            setShowStock(true);
        });

    };

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8081/stocks/delete?name=${name}`).then((res) => {
            alert("Stock Deleted Successfully");
            // window.location.href("")
    
        }
        )};

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            no_of_stocks: quantity,
            stock_price: price,
        }

        axios.put(`http://localhost:8081/stocks/update?id=${Id}`,data).then((res) => 
        {
            alert("Stock Updated Successfully")
        })};


    return (
        <div
            className={`fixed top-  0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="bg-white relative w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl  text-blue-950 font-semibold mb-4">EDITS STOCKS</h2>
                <button
                    onClick={onClose} // Close button action
                    className="absolute top-5 right-5 text-red-600 hover:text-gray-800 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-blue-700 text-sm font-bold mb-2 uppercase" htmlFor="name">
                            Stock Id
                        </label>
                        <input
                            type="number"
                            name="name"
                            id="name"
                            onChange={(e) => setId(e.target.value)}
                            className="py-3 px-4 my-2 outline-none w-full border-2 rounded-lg focus:ring-2 focus:ring-blue-900 text-gray-700"
                            required
                        />
                    </div>

                    <div className="text-center"
                        onClick={handleSubmit}>
                        <button
                            type="submit"
                            className="bg-blue-900 tracking-wider font-semibold text-white w-1/2 px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Find Stock
                        </button>
                    </div>
                    {showStock && (
                        <div>
                            <h1>Stock Data:</h1>
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="text-center space-x-4 w-full mt-4">
                                    <button
                                        type="button"
                                        onClick={handleDelete}
                                        className="w-1/3 bg-red-500 tracking-wider font-semibold text-white px-4 py-2 rounded-lg  hover:bg-red-100  hover:text-red-500 active:text-red-500  focus:ring-4 ring-red-500 hover:border-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button><button
                                        type="button"
                                        onClick={handleUpdate}
                                        className="w-1/3 bg-green-500 tracking-wider font-semibold text-white  px-4 py-2 rounded-lg hover:bg-green-100 hover:text-green-500 active:text-green-500  focus:ring-4 ring-green-500 hover:border-green-600 focus:outline-none"
                                    >
                                        Update
                                    </button>
                                </div>
                            </>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default EditStockModal;
