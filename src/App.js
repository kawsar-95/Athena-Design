import './App.css';
import Header from './Components/Home/Header/Header';
import WhatWeDo from './Components/Home/WhatWeDo/WhatWeDo';
import ContactUs from './Components/Home/ContactUs/ContactUs';
import Achievements from './Components/Home/Achievements/Achievements';
import ChooseYourTeam from './Components/Home/ChooseYourTeam/ChooseYourTeam';
import GetYourDesign from './Components/Home/GetYourDesign/GetYourDesign';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
      <div>
        <Header />
        <WhatWeDo />
        <ContactUs />
        <Achievements />
        <ChooseYourTeam />
        <GetYourDesign />
        <Footer />
      </div>

  );
}

export default App;
