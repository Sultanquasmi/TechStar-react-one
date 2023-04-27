import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Copmponents/Header"
import Home from "./Copmponents/Home"
import Footer from "./Copmponents/Footer"
import Contact from "./Copmponents/contact"
import Services from "./Copmponents/Services.jsx"


import "./Styles/App.scss"
import "./Styles/header.scss"
import "./Styles/home.scss"
import "./Styles/footer.scss"
import "./Styles/contact.scss"
import "./Styles/mediaquery.scss"

function App() {
  return(
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
   </Router>
    
  )

}

export default App;
