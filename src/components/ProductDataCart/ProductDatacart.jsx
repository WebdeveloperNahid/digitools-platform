import { use } from "react";
import DataCart from "./DataCart";


const ProductDatacart = ({fetchPromise}) => {
    console.log(fetchPromise)
    const productDatas = use(fetchPromise)
    console.log("dlklsdfslkdfj", productDatas)
    return (
        <div>
           <DataCart productDatas = {productDatas}></DataCart>
        </div>
    );
};

export default ProductDatacart;