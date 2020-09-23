import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Lonely Planet Portugal (Country Guide)"
            price={15.69}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81BiZ7XeCuL.jpg"
          />
          <Product
            id="49538094"
            title="CYBERPUNK 2077 - DAY 1 Standard Edition [PlayStation 4]"
            price={67.89}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81xgC1vEBjL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Swimline Giant Pretzel Swim Fun Inflatable Floating Seat, 60 Diameter by Swimline"
            price={30.43}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81sKVlV7RvL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 1TB SSD Storage, Magic Keyboard) - Space Gray"
            price={2000.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71bElkQQ7LL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Funny Existence is pain Coffee Mug Tea Cup White Blue"
            price={17.05}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41OXEiLrSnL._AC_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Funko POP! Bobble Vinyl Star Wars The Mandalorian - Mandalorian"
            price={16.05}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61GQwUyI1fL._AC_SL1300_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
