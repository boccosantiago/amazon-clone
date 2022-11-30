import React from "react";
import "./Home.css";
import Product from "./Product";
import products from "../products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title={products[0].title}
            price={products[0].price}
            image={products[0].image}
            rating={products[0].rating}
          />
          <Product
            title={products[1].title}
            price={products[1].price}
            image={products[1].image}
            rating={products[1].rating}
          />
        </div>
        <div className="home__row">
          <Product
            title={products[2].title}
            price={products[2].price}
            image={products[2].image}
            rating={products[2].rating}
          />
          <Product
            title={products[3].title}
            price={products[3].price}
            image={products[3].image}
            rating={products[3].rating}
          />
          <Product
            title={products[4].title}
            price={products[4].price}
            image={products[4].image}
            rating={products[4].rating}
          />
        </div>
        <div className="home__row">
          <Product
            title={products[5].title}
            price={products[5].price}
            image={products[5].image}
            rating={products[5].rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
