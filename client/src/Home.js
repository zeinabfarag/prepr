import React from "react";
import website1 from "./Images/website1.png";
import website2 from "./Images/website2.png";
import website3 from "./Images/website3.png";
import website4 from "./Images/website4.png";
import website5 from "./Images/website5.png";
import website6 from "./Images/website6.png";
import website7 from "./Images/website7.png";
import website8 from "./Images/website8.png";
import ecommerce from "./Images/ecommerce.svg";
import laptop from "./Images/laptop.svg";
import responsive from "./Images/responsive-design.svg";
import shopify from "./Images/shopify.svg";
import wordpress from "./Images/wordpress.svg";
import woocommerce from "./Images/woocommerce.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <h2>Hire from our exclusive network of software developers!</h2>
        <p className="description">Build your next app, eCommerce site, or website with our network of
            software developers. Matched to you and your project needs in under 24 hours. </p>


        <div className="enter-email" style={{ backgroundColor: "white" }}>
          <input type="email" className="email-textbox" placeholder="Your email address" style={{ border: "1.5px solid black" }} autofocus></input>
          <input type="submit" className="submit-btn" value="Submit" style={{ background: "linear-gradient(#52de97, #5dc485)", color: "white" }} />
        </div>
      </div>

      <div className="website-container">
        <img className="website1" src={website1} alt="thumbnail of landing page" />
        <img className="website2" src={website2} alt="thumbnail of landing page" />
        <img className="website3" src={website3} alt="thumbnail of landing page" />
        <img className="website4" src={website4} alt="thumbnail of landing page" />
        <img className="website5" src={website5} alt="thumbnail of landing page" />
        <img className="website6" src={website6} alt="thumbnail of landing page" />
        <img className="website7" src={website7} alt="thumbnail of landing page" />
        <img className="website8" src={website8} alt="thumbnail of landing page" />
      </div>

      {/* Testimonals */}
      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-row">
          <img className="test-img" alt="" src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
          <p className="test-review">I own a small clothing store and lost a lot of work due to COVID. I wanted to make a website but I didn't know how.
          Skills Marketplace matched me with the right person and I had a site up and running in no time.
          </p>
        </div>

        <div className="testimonial-row">
          <img className="test-img" alt="" src="https://www.senseiprojectsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"></img>
          <p className="test-review">Social distancing has been hard on my restaurant. I wanted people to know that we were open for business and delivery.
          I was able to match with Anna on here and she helped me get a website up. Now more people are calling in for orders and we're doing better.
          </p>
        </div>

      </div>

      <div className="hire-us">
        <h2>Hire the right software developer today</h2>
        <p className="description">Whether you’re building and app, and eCommerce store, or a website or need a hand from an experienced web developer.
        Tell us what you’re working on and your budget and you can get matched with a member of our network of developers and designers in under 24 hours.</p>
      </div>

      <div className="web-services">
        <h2>We provide services in the following areas</h2>
        <div className="icon-container">
          <div className="icon">
            <img className="ecommerce" src={ecommerce} alt="shopping cart" />
            <p className="service-description">Ecommerce</p>
          </div>

          <div className="icon">
            <img className="laptop" src={laptop} alt="laptop" />
            <p className="service-description">Custom Development</p>
          </div>

          <div className="icon">
            <img className="responsive" src={responsive} alt="responsive design icon" />
            <p className="service-description">Responsive Design</p>
          </div>

          <div className="icon">
            <img className="shopify" src={shopify} alt="shopify logo" />
            <p className="service-description">Shopify Development</p>
          </div>

          <div className="icon">
            <img className="wordpress" src={wordpress} alt="wordpress logo" />
            <p className="service-description">Wordpress Development</p>
          </div>

          <div className="icon">
            <img className="woocommerce" src={woocommerce} alt="woocommerce" />
            <p className="service-description">Woo Commerce</p>
          </div>
        </div>
      </div>

      <div className="enter-email">
        <input type="email" className="email-textbox" placeholder="Your email address" autofocus></input>
        <input type="submit" className="submit-btn" value="Submit" />
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p className="text">SkillsMarketPlace is an online community that matches businesses who have solutions with a professional who can deliver it.</p>
      </div>

      <Footer/>
      <footer>
        <p className="copyright">©Copyright 2020 SkillsMarketPlace</p>
      </footer>
    </div>
  );
};

export default Home;
