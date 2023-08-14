import "./App.scss";
import useMediaQuery from "./hooks/useMediaQuery";
import BGDesktop from './images/bg-desktop.svg'
import BGMobile from './images/bg-mobile.svg'
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

function App() {
  const media = useMediaQuery('only screen and (max-width:375px')
  return (
    <>
    {!media && <img src={BGDesktop} alt="Background for Desktop" className='bg-desktop'/>}
    {media && <img src={BGMobile} alt="Background for Mobile" className='bg-mobile'/>}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
