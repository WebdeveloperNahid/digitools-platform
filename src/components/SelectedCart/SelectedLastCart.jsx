import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedLastCart = ({products,handleDeleteSelectedProducts, dolar, setDolar}) => {
  const handleRemovePrice = () => {
    setDolar(dolar - products.price);
     handleDeleteSelectedProducts(products);
  }
    return (
        <div>
            <div className="flex justify-between items-center w-[90%] mx-auto border-3 border-green-300 px-5 py-5 rounded-2xl bg-[#F2F2F2]">
                <div
                  
                  className="flex items-center  ju gap-6  font-bold"
                >
                  <img src={products.icon} alt="" />
                  <div>
                    <h2 className="font-semibold">{products.name}</h2>
                    <p className="text-[#6e6a6a]">$ {products.price}</p>
                  </div>
                </div>
                <button
                  onClick = {handleRemovePrice}
                  // onClick={() => handleDeleteSelectedProducts(products)}
                  className="text-red-500 flex gap-1 justify-center items-center"
                >
                  {" "}
                  remove <MdDelete />
                </button>
              </div>
            
        </div>
    );
};

export default SelectedLastCart;