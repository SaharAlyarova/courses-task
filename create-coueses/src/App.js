import './App.css';
import FooterLay from './layouts/footer';
import HeaderLay from './layouts/header';
import Routers from './routes';
import ScrollToTop from "react-scroll-to-top";
import "./style.scss"
function App() {
  return (
    <div className="App">
    <HeaderLay/>
    <ScrollToTop style={{backgroundColor:"purple",color:"white"}}/>
    <Routers/>
   <FooterLay/>
    </div>
  );
}

export default App;
