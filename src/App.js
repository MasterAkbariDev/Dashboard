import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Containers/Header/Header';
import { SidebarProvider } from './Context/SidebarContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Classic from './Containers/Dashboard/Classic/Classic';
import Minimal from './Containers/Dashboard/Minimal/Minimal';
import Login from './Containers/Pages/Login/Login';
import Register from './Containers/Pages/Register/Register';
import ForgetPassword from './Containers/Pages/ForgetPassword/ForgetPassword';
import FAQSection from './Containers/Applications/FAQ/FAQ';
import Chat from './Containers/Applications/Chat/Chat';
import MailBox from './Containers/Applications/MailBox/MailBox';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {

    const updateDirection = () => {
      if (i18n.language === 'fa') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    };

    updateDirection();

    i18n.on('languageChanged', updateDirection);

    return () => {
      i18n.off('languageChanged', updateDirection);
    };
  }, [i18n]);



  return (
    <Router>
      <div className="App">
        <SidebarProvider>
          <Sidebar />
          <main className='lg:ltr:pl-[270px] lg:rtl:pr-[270px] transition-all duration-300'>
            <Header />
            <div className='p-10px lg:p-30px'>
              <Routes>
                <Route path='/' Component={Classic} />
                <Route path='/Minimal' Component={Minimal} />
                <Route path='/Login' Component={Login} />
                <Route path='/Register' Component={Register} />
                <Route path='/ForgetPassword' Component={ForgetPassword} />
                <Route path='/Applications/'>
                  <Route path='MailBox' Component={MailBox} />
                  <Route path='Chat' Component={Chat} />
                  <Route path='FAQ' Component={FAQSection} />
                </Route>
              </Routes>
            </div>
          </main>
        </SidebarProvider>
      </div>
    </Router>

  );
}

export default App;
