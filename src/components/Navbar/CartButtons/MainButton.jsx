import React, { useMemo } from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";

const MainButton = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return cartList.find((item) => item?.id === product.id)?.count;
  }, [cartList, product?.id]);

  console.log("The count is", cartCount);

  return (
    <>
      {cartCount ? (
        <AfterCart cartCount={cartCount} productId={product.id} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
};

export default MainButton;
