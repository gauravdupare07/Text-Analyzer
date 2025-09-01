// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/textForm'; // ✅ fix casing (React is case-sensitive)
import React, { useState } from 'react';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  };

  // toggle light / dark mode
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#292e32ff';
      showAlert(": Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(": Light mode has been enabled", "success");
    }
  };

  return (
    <>  
      {/* <Router> */}
        <Navbar 
          title="Text.Analyzer" 
          aboutus="About" 
          mode={mode} 
          toggleMode={toggleMode} 
        />
        <Alert alert={alert}/>
        
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={ */}
              {/* <About mode={mode} /> */}
              {/* } />
            <Route 
              exact path="/" 
              element={ */}
                <TextForm 
                  showAlert={showAlert} 
                  heading="Enter the text to analyze" 
                  mode={mode} 
                  alert={alert} 
                />
              {/* } 
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
