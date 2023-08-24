import { Route, Routes } from "react-router-dom";
import ProductDispay from "./Componets/OtherCompo/ProductDispay";
import ContactPage from "./Componets/contactPage/ContactPage";
import AboutPage from "./Componets/aboutPage/AboutPage";
import ServicesPage from "./Componets/services/ServicesPage";
import CartItem from "./Componets/Cart/CartItem";



 function App() {
  return (
<div>
 
<Routes>
<Route path="/" element = {<ProductDispay/>}></Route>
<Route path="/about" element = {<AboutPage/>}></Route>
<Route path="/contact" element = {<ContactPage/>}></Route>
<Route path="/services" element = {<ServicesPage/>}></Route>
<Route path="/cartitem" element = {<CartItem/>}></Route>
</Routes>


</div> 
  );
}

export default App;
