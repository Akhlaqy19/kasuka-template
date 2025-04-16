import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import CompanyAbout from "./components/CompanyAbout/CompanyAbout";
import Slider from "./components/Slider/Slider";
import Advertising from "./components/Advertising/Advertising"; 
import Services from "./components/Services/Services";
import Call from "./components/Calling/Call";
import Portfolio from "./components/Portfolio/Portfolio";
import Experance from "./components/Experance/Experance";
import Comments from "./components/Comments/Comments";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CopyRight from "./components/CopyRight/CopyRight";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <CompanyAbout></CompanyAbout>
      <Slider></Slider>
      <Advertising></Advertising>
      <Services></Services>
      <Call></Call>
      <Portfolio></Portfolio>
      <Experance></Experance>
      <Comments></Comments>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
