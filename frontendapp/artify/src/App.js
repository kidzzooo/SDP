import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Image from './pages/image'
import Card from './components/Card'
import Shop from '../src/pages/Shop';
import Art from '../src/pages/Art';
import Photography from '../src/pages/Photography';
import Sculpture from '../src/pages/Sculpture';
import Login from '../src/pages/Login';
import SignUp from '../src/pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import UserNavbar from "./components/UserNavbar";
import Sell from "./pages/Sell";
import CardDetail from "./components/CardDetail";
import CheckoutForm from "./pages/CheckoutForm";
import ListItems from "./pages/listItems";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar2/>
        <Routes>
          <Route path="/" exact component={Hero} />
          <Route path="/shop" component={Shop} />
          <Route path="/art" component={Art} />
          <Route path="/photography" component={Photography} />
          <Route path="/sculpture" component={Sculpture} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/sell" component={Sell} />
          <Route path="/card/:title" element={<CardDetail />} />
          <Route path='/checkout' component={CheckoutForm} />
          <Route path='/listitems' component={ListItems} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
