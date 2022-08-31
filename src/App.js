
import React from "react";
import  {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Careers from './components/Careers';  

function App() {
  return (
           
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/careers" element={<Careers />}/>
          <Route path="/products" element={<Products />}/>
       </Routes>
      
      

   
  );
}

export default App;
