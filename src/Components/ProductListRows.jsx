import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import ProductEdit from "./ProductEdit";
const ProductListRows = ({ product, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  {/* Listing of product details like name,category,price,stocks */}
  return (
    
    <tr
      key={product.id}
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.id}
      </th>
      <td class="px-6 py-4">{product.product_name}</td>
      <td class="px-6 py-4">{product.category}</td>
      <td class="px-6 py-4">{product.price}</td>
      <td class="px-6 py-4">{product.stock}</td>

      <td class="flex items-center px-6 py-4">
        <button
          onClick={toggleModal}
          class="font-bold text-xl text-gray-600 dark:text-white hover:underline"
        >
          <CiEdit />
        </button>
        {isModalOpen && (
          <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Product
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
                <ProductEdit theProducts={product} />
              </div>
            </div>
          </div>
        )}
        <button
          onClick={() => onDelete(product.id)}
          class="font-bold text-xl text-red-600 dark:text-red-500 hover:underline ms-3"
        >
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
};

export default ProductListRows;
