import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import ProductData from "../assets/ProductData";
import AddProduct from "./AddProduct";

import ProductListRows from "./ProductListRows";

export function ProductList() {

  let navigate = useNavigate();

  const handleDelete = (id) => {
        var index = ProductData.map((e) => {
            return e.id
        }).indexOf(id)
        ProductData.splice(index, 1);
        navigate('/products');
    }

    return (
        <>     
        
            <div class="border border-gray-700 dark:bg-gray-800 relative overflow-x-auto shadow-md rounded-lg">
                <div className='flex justify-between'>
                    <h1 class="p-6 text-2xl font-extrabold dark:text-gray-400">Product Listings<small class="ms-2 font-normal text-gray-500 dark:text-gray-600">of this current month</small></h1>
                    <div className="p-4">
                    <AddProduct/>
                    </div>
                </div>


                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <thead class="text-xs border-b dark:border-gray-700 text-gray-700 uppercase dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {/* Deleting product details */}
                    <tbody>
                        {ProductData.map((product) => (
                                <ProductListRows product={product} onDelete={handleDelete}/>
                        ))}


                    </tbody>
                </table>
            </div>
            
        </>
    )

}