import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const SelectedCart = ({ selectedProducts, setSelectedProducts }) => {
  console.log("selectedProducts", selectedProducts);
  return (
    <div className=" py-10 w-[83%] mx-auto bg-white shadow-2xl">
      {selectedProducts.length == 0
        ? <div className="my-5 mx-auto py-10 space-y-5">
            <h1 className="text-4xl font-bold mx-auto">NO Products Subscribed</h1>
            <p className="text-[#888888] font-bold">Go to Subscribe button & do subcrided</p>
        </div> 
        : selectedProducts.map((products, index) => {
            const handleDeleteSelectedProducts = (products) => {
              console.log("Delete", products);
              const filteredProducts = selectedProducts.filter(
                (selectedProduct) => selectedProduct.name !== products.name,
              );
              setSelectedProducts(filteredProducts);
              toast.warn(`${products.name} is deleteing`);
            };

            return (
              <div className="my-5">
                <div className="flex justify-between items-center w-[90%] mx-auto border-3 border-green-300 px-5 py-5 rounded-2xl bg-[#F2F2F2]">
                  <div
                    key={index}
                    className="flex items-center  ju gap-6  font-bold"
                  >
                    <img src={products.icon} alt="" />
                    <div>
                      <h2 className="font-semibold">{products.name}</h2>
                      <p className="text-[#6e6a6a]">$ {products.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteSelectedProducts(products)}
                    className="text-red-500 flex gap-1 justify-center items-center"
                  >
                    {" "}
                    remove <MdDelete />
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default SelectedCart;
