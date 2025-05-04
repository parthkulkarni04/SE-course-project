
import React from "react"; 
import { useState } from "react";  
import { useNavigate } from "react-router-dom"; 
import ProductData from "../assets/ProductData";

 
const AddProduct= () => { 
  
  const [isModalOpen, setIsModalOpen] = useState(false); 
   
  let history = useNavigate(); 
 
  // Function to toggle modal visibility 
  const toggleModal = () => { 
    setIsModalOpen(!isModalOpen); 
  }; 
 
  //Function to handle form submit 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
 
    ProductData.push({  
      id: productID,  
      product_name: productName,  
      category: category1,
      price: cost,  
      stock: stocks
    }); 
     
    toggleModal(); 
    history("/products"); 
  }; 
 
  const [productID, setProductID] = useState(""); 
  const [productName, setProductName] = useState(""); 
  const [category1, setCategory1] = useState(""); 
  const [cost, setCost] = useState(0); 
  const [stocks,setStocks] = useState(0);

  return ( 
    <div> 
      {/* Add product button whic opens modal */}
      <button 
        onClick={toggleModal} 
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
        type="button" 
      > 
        Add product 
      </button> 
 
      {isModalOpen && ( 
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"> 
          <div className="relative p-4 w-full max-w-md max-h-full"> 
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700"> 
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> 
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> 
                  Create New Order 
                </h3> 
                <button 
                  onClick={toggleModal} 
                  type="button" 
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                > 
                  <svg 
                    className="w-3 h-3" 
                    aria-hidden="true" 
                    fill="none" 
                    viewBox="0 0 14 14" 
                  > 
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" 
                    /> 
                  </svg> 
                  <span className="sr-only">Close modal</span> 
                </button> 
              </div> 
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
                      onChange={(e) => setProductID(e.target.value)} 
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

                     onChange={(e) => setCategory1(e.target.value)} 
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
                      Price 
                    </label> 
                    <input 
                      type="number" 
                      id="price" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                      placeholder="$9999" 
                      required 
                      onChange={(e) => setCost(e.target.value)} 
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
                      onChange={(e) => setStocks(e.target.value)} 
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
                  Add new product 
                </button> 
              </form> 
            </div> 
          </div> 
        </div> 
      )} 
    </div> 
  ); 
}; 
 
export default AddProduct;