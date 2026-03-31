import { Suspense } from "react";
import "./App.css";
import Hero from "./components/NavBar/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import ProductDatacart from "./components/ProductDataCart/ProductDatacart";
import Stats from "./components/Stats/Stats";


const fetchData = async () => {
  const res = await fetch("/CartData.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      

      <Suspense
        fallback={ <div className="flex justify-center items-center min-h-dvh">
          <span className="loading loading-bars loading-xl"></span>
        </div> }
      >
        <ProductDatacart fetchPromise={fetchPromise}></ProductDatacart>
      </Suspense>
    </>
  );
}

export default App;
