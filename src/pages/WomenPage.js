import React, { Fragment, useEffect, useState } from "react";
import ProductList from "../components/shop/ProductList";
import ProductItem from "../components/shop/ProductItem";
import Banner from "../components/shop/Banner";

import { products } from "../assets/inventory";

import { useSelector } from "react-redux";

function WomenPage() {
  const currentBrand = useSelector((state) => state.UI.brandToFilter);

  const [list, setList] = useState(products)

  useEffect(() => {
    console.log(currentBrand);
    if (currentBrand === "all") {
      setList(products.filter((item) => item.gender === 'female'));
    } else {
      setList(products.filter((item) => item.gender === 'female' && item.brand === currentBrand))
    }
  }, [currentBrand]);
  return (
    <Fragment>
      <Banner />
      <ProductList>
        {list
          .filter((item) => item.gender === "female")
          .map((item) => (
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

export default WomenPage;
