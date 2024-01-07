
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/navbar';
import Footer from './Component/Footer/footer';
import Home2 from './Component/Home/home2';
import Card from './Component/Card/card';
import Blog from './Component/Blog/blog';
import Deals from './Component/Deals/deals'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home2/>
     
      <Card/>
      <Deals/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
