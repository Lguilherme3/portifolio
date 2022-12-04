import "./App.css";
import Header from "./componentes/Header";
import SkillsSection from "./componentes/SkillsSection";
import AboutMe from "./componentes/AboutMe";
import Contacts from "./componentes/Contact";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";


function App() {
  return (
    <div className="App">
      <Contacts />
      <Header />
      <Nav />
      <SkillsSection />
      <AboutMe />
      <Footer />
      
      
    </div>
  );
}

export default App;
