import { Suspense } from "react";
import "./App.css";
import Hero from "./components/NavBar/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import ProductDatacart from "./components/ProductDataCart/ProductDatacart";
import Stats from "./components/Stats/Stats";
import Toggling from "./components/Toggling/Toggling";

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
      <Toggling></Toggling>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <ProductDatacart fetchPromise={fetchPromise}></ProductDatacart>
      </Suspense>
    </>
  );
}

export default App;
