import axios from "axios";
import { useEffect, useState } from "react";

function useProduct() {
  const [products, setProduct] = useState([]);

  let getData = async () => {
    const products = await axios.get('https://6461c1c2491f9402f4aa0565.mockapi.io/products')
    setProduct(products.data)
  }

  useEffect(() => {
    // On Mount
    getData()
  },[])
  return {
    products,
    getData
  };
}

export default useProduct;
