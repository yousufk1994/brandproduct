import {Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import BootNav from './components/BootNav';


function Root() {
  return (
    <>
    <BootNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root