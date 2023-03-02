import React from "react";
import shortid from "shortid";
import homeImg from "../images/homeB.jpg";
import Product from "./Product";
import ProductImg1 from "../images/products/1.png";
import ProductImg2 from "../images/products/2.png";
import ProductImg3 from "../images/products/3.png";
import ProductImg4 from "../images/products/4.png";
import ProductImg5 from "../images/products/5.png";
import ProductImg6 from "../images/products/6.png";
import { useAuth } from "../context/GlobalState";
const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent to-[#EAEDED]"></div>
        <img className="w-full " src={homeImg} alt="home-img" />
      </div>
      <div className=" relative z-20 bg-[#EAEDED]">
        <div className="grid grid-cols-2 gap-7">
          <Product
            id={shortid.generate()}
            image={ProductImg1}
            price={64}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC - For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={ProductImg2}
            price={64}
            title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
            rating={3}
          />
        </div>
        <div className="flex">
          <Product
            id={shortid.generate()}
            image={ProductImg3}
            price={64}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White

          "
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={ProductImg4}
            price={64}
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB

          "
            rating={3}
          />
          <Product
            id={shortid.generate()}
            image={ProductImg5}
            price={64}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet...

          "
            rating={4}
          />
        </div>
        <div className="flex">
          <Product
            id={shortid.generate()}
            image={ProductImg6}
            price={64}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black          "
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
