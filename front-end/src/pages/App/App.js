import { React, useState} from 'react';
import Navbar from '../../modules/navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import NewTransaction from '../NewTransaction/NewTransaction';
import Budget from '../Budget/Budget';
import Savings from '../Savings/Savings'
import About from '../About/About';
import Settings from '../Settings/Settings';
import Goals from '../Goals/Goals'
import Visualisation from '../Visualisation/Visualisation'
import Projects from '../Projects/Projects'
import GlobalLedgers from '../GlobalLedgers/GlobalLedgers'
import Configuration from '../Configuration/Configuration'
import Footer from '../../modules/footer/Footer';
import './App.scss';

const App = () => {

  const links = [
    {label: 'Home', href:'/'},
    {label: 'New Transaction', href:'/new-trans'},
    {label: 'Budgets', href:'/budgets'},
    {label: 'Savings', href:'/savings'},
    {label: 'Goals', href:'/goals'},
    {label: 'Visualise', href:'/vis'},
    {label: 'Projects', href:'/proj'},
    {label: 'Global Ledger', href:'/gl'},
    {label:'Configuration', href:'/config'},
    {label:'About', href:'/about'},
    {label: 'Settings', href:'/settings'},
  ]

  const [currentRender, setCurrentRender] = useState('/');
  const [darkMode, setDarkMode] = useState(false)

  /**
   * !!CRITICAL FUNCTION!!
   * Renders the app based around the currentRender variable
   * To add a new page to the app, simply match the convention with its component.
   */
  const renderAppConentPane = () => {
    switch(currentRender) {
      case '/':
        return <Dashboard />;

      case '/new-trans':
        return <NewTransaction />;

      case '/budgets':
        return <Budget />;

      case '/savings':
        return <Savings />

      case '/goals':
        return <Goals />

      case '/vis':
        return <Visualisation />

      case '/proj' :
        return <Projects />

      case '/gl' :
        return <GlobalLedgers />

      case '/config':
        return <Configuration />

      case '/about':
        return <About />

      case '/settings':
        return <Settings />

      default: 
        <Dashboard />
        return;
    }
  }

  return (
    <div >
      <div className='app-navbar-container'>
        <Navbar 
          links={links}
          logo={"Nest Track"}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          parentPropagator={setCurrentRender}
          currentlySelectedLink={currentRender}
        />
      </div>
      <div className='app-content-container'>
        {renderAppConentPane()}
      </div>
      <div className='app-footer-container'>
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
