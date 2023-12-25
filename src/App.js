import AnimationContextProvider from './context/AnimationContext';
import Header from './components/header/Header';
import HeroSection from './sections/hero/HeroSection';
import AboutSection from './sections/about/AboutSection';
import ProjectSection from './sections/projects/ProjectSection';
import ContactSection from './sections/contact/ContactSection';
import './App.css';

function App() {
  return (
    <AnimationContextProvider>
      <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
    </AnimationContextProvider>
  );
}

export default App;