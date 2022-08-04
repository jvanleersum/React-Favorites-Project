import React, { useState } from "react";

const ProductsContext = React.createContext({
  products: [],
  favorites: [],
  toggleFavorites: (productId) => {},
});

export const ProductsContextProvider = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorites = (productId) => {
    setProductsList((currentProdList) => {
      const favProductIndex = currentProdList.findIndex(
        (prod) => prod.id === productId
      );
      const newFavStatus = !currentProdList[favProductIndex].isFavorite
      const updatedProducts = [...currentProdList]
      updatedProducts[favProductIndex].isFavorite = newFavStatus
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFavorites }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
