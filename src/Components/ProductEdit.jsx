import React, { useState } from "react";
import ProductData from "../assets/ProductData";
import { useNavigate } from "react-router-dom";
//Edit Product Details
const ProductEditListRows = ({ theProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { id, product_name, category, price, stock } = theProducts;
  const [productName, setProductName] = useState(product_name);
  const [catg, setCatg] = useState(category);
  const [prc, setPrc] = useState(price);
  const [stk, setStk] = useState(stock);

  let navigate = useNavigate();

  var index = ProductData.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = ProductData[index];
    a.product_name = productName;
    a.category = catg;
    a.price = prc;
    a.stock = stk;
    toggleModal();
    navigate("/products");
  };

  return (
    <div>
      <form class="p-4 md:p-5">
        <div class="grid gap-4 mb-4 grid-cols-2">
          <div class="col-span-1">
            <label
              for="pid"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product ID
            </label>
            <input
              type="text"
              id="pid"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              placeholder="A12345"
              value={id}
              disabled
            />
          </div>

          {/* Product Name */}
          <div class="col-span-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type full name"
              required
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          {/* Category */}
          <div class="col-span-2 sm:col-span-1">
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              value={catg}
              onChange={(e) => setCatg(e.target.value)}
            >
              <option selected="">Select category</option>
              <option value="FASHION">FASHION</option>
              <option value="FURNITURE">FURNITURE</option>
              <option value="APPLIANCES">APPLIANCES</option>
              <option value="STATIONARY">STATIONARY</option>
              <option value="ELECTRONICS">ELECTRONICS</option>
              <option value="SHOES">SHOES</option>
            </select>
          </div>
          {/* Price */}
          <div class="col-span-2 sm:col-span-1">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price in $
            </label>
            <input
              type="number"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$9999"
              required
              value={parseInt(prc.slice(1))}
              onChange={(e) => setPrc(`\$${e.target.value}`)}
            />
          </div>

          {/* Stocks */}
          <div class="col-span-2 sm:col-span-1">
            <label
              for="stock"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="9999"
              required
              value={stk}
              onChange={(e) => setStk(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-white inline-flex items-center bg-yellow-800 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-800 dark:hover:bg-yellow-500 dark:focus:ring-yellow-800"
          onClick={(e) => handleSubmit(e)}
        >
          <svg
            class="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductEditListRows;
