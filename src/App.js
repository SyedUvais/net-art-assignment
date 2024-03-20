import './App.css';
import NavBar from './components/NavBar';
import MiddleSection from './components/MiddleSection';
import LowerSection from './components/LowerSection';
import Footer from './components/Footer';

function App() {
  return (
    <section className='bg-[#fffbcc] w-[100%] px-2 sm:px-6 space-y-6'>
      <NavBar />
      <MiddleSection />
      <LowerSection />
      <Footer />
    </section>
  );
}

export default App;
