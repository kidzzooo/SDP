import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Artify.png";
import Sell from "../pages/Sell";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Shop from "../pages/Shop";
import Art from "../pages/Art";
import Photography from "../pages/Photography";
import Sculpture from "../pages/Sculpture";
import Hero from "./Hero";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Avatar, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CardDetail from './CardDetail';
import CheckoutForm from "../pages/CheckoutForm";
import ListItems from './../pages/listItems';
const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Art", href: "/art" },
  { name: "Photography", href: "/photography" },
  { name: "Sculpture", href: "/sculpture" },
];
export default function Navbar2() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-9 w-auto" src={logo} alt="Artify Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-md font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  onClick={toggleDropdown}
                />
                {dropdownOpen && (
                  <div className="dropdown absolute left-0 mt-2 p-3 bg-blue-gray-50 rounded-md">
                    <Link to="/sell" className="button-style">
                      Sell
                    </Link>
                    <br />
                    <Link to="/login">Logout</Link>
                    <br />
                  </div>
                )}
                <div></div>
              </div>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h- w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-md font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                      <br />
                    </Link>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                  />
                  <div>
                    <Typography variant="h6">Tania Andrew</Typography>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/art" element={<Art />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/cards/:title" element={<CardDetail />} />
        <Route path="/checkout" element={<CheckoutForm/>} />
        <Route path="/listItems" element={<ListItems/>} />
      </Routes>
    </div>
  );
}
