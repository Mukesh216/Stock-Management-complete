import { useState } from 'react';
import axios from 'axios';

const CreateStockModal = ({ isOpen, onClose }) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");




  const handleSubmit = (e) => {
    const formData = { name: name, stock_price: price, no_of_stocks: quantity };
    e.preventDefault();
    axios.post("http://localhost:8081/stocks", formData).then((res) => {
      console.log(res.data);
      window.location.reload();
    });
    onClose();
  };

  return (
    <div
      className={`fixed top-  0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="bg-white relative w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl  text-blue-950 font-semibold mb-4">ADD STOCKS</h2>
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
              Stock Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="py-3 px-4 my-2 outline-none w-full border-2 rounded-lg focus:ring-2 focus:ring-blue-900 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 text-sm font-bold mb-2 uppercase" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              className="py-3 px-4 my-2 outline-none border-2 w-full rounded-lg focus:ring-2 focus:ring-blue-900  text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-700 text-sm font-bold mb-2 uppercase" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className="py-3 px-4 my-2 outline-none border-2 w-full rounded-lg focus:ring-2 focus:ring-blue-900  text-gray-700"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 tracking-wider font-semibold text-white w-1/2 px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStockModal;
