import React, { Fragment, useEffect, useState } from "react";
import ProductList from "../components/shop/ProductList";
import ProductItem from "../components/shop/ProductItem";
import Banner from "../components/shop/Banner";

import { products } from "../assets/inventory";

import { useSelector } from 'react-redux';

function AllPage() {
  const currentBrand = useSelector((state) => state.UI.brandToFilter);

  const [list, setList] = useState(products);

  useEffect(() => {
    if(currentBrand === 'all'){
      setList(products);
    } else {
      setList(products.filter((item) => item.brand === currentBrand))
    }
  }, [currentBrand])




  return (
    <Fragment>
      <Banner />
      <ProductList>
        {list.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            color={item.color}
            price={item.price}
            gender={item.gender}
            image={item.image}
          />
        ))}
      </ProductList>
    </Fragment>
  );
}

export default AllPage;
