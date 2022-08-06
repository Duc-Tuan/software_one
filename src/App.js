import About from './component/About';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Header from './component/Header';
import Nav from './component/Nav';
import Portfolio from './component/Portfolio';
import Service from './component/Service';
import Testimonials from './component/Testimonials';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Service></Service>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
