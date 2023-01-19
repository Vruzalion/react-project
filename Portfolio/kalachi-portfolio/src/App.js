
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Publications from './components/publications/Publications';
import Talks from './components/talks/Talks';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Publications/>
        <Talks/>
      </main>

    </>
  );
}

export default App;
