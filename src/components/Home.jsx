import React from "react";
import "./Home.css";
import Product from "./Product";
import products from "../products";

function Home({ query }) {
  const searchProducts = [...products].filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
          alt=""
        />
        <div className="home__row">
          {searchProducts.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
