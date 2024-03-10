import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import arts from "../data/data.json";
import Card from "./Card";
import { Button } from "@material-tailwind/react";
import CheckoutForm from "../pages/CheckoutForm";
import { useNavigate } from 'react-router-dom';

export default function CardDetail() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(arts);
  }, []);
  const { title } = useParams();
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/checkout')
  }
  return (
    <div>
      {data.length > 0 &&
        data
          .filter((item) => item.title === title)
          .map((item) => {
            return (
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="max-w-xs h-auto rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl font-semibold mb-4">
                      {item.title}
                    </h2>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                      by {item.artist}
                    </p>
                    <h4 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {item.price}
                    </h4>
                    <Button onClick={handleClick}>Buy Now</Button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
