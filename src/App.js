
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  return (
   <>
      <div className='HeaderNew' >
        <Banner/>
        <Header/>
      </div>
      
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
   </>
  );
}

export default App;
