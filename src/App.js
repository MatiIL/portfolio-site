import AnimationContextProvider from './context/AnimationContext';
import Header from './components/header/Header';
import MainFrame from './mainframe/MainFrame';
import './App.css';

function App() {
  return (
    <AnimationContextProvider>
      <div className="App">
      <Header />
      <MainFrame />
    </div>
    </AnimationContextProvider>
  );
}

export default App;