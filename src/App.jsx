import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/NavBar/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import ProductDatacart from "./components/ProductDataCart/ProductDatacart";
import Stats from "./components/Stats/Stats";
import { ToastContainer } from "react-toastify";


const fetchData = async () => {
  const res = await fetch("/CartData.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchData();
   const [selectedProducts, setSelectedProducts] = useState([]);
   const [dolar,setDolar] = useState(0)

  return (
    <>
      <Navbar  selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} ></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      

      <Suspense
        fallback={ <div className="flex justify-center items-center min-h-dvh">
          <span className="loading loading-bars loading-xl"></span>
        </div> }
      >
        <ProductDatacart fetchPromise={fetchPromise}  selectedProducts={selectedProducts}  setSelectedProducts={setSelectedProducts} dolar={dolar} setDolar ={setDolar} ></ProductDatacart>
      </Suspense>

       <ToastContainer />
    </>
  );
}

export default App;
