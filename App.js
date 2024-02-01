import './App.css';
import { useState } from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import About from './Component/About';
import Home from './Component/Home';
import Error from './Component/Error';
import TextForm from './Component/TextForm';
import { Route, Routes } from 'react-router-dom';
import Alert from './Component/Alert';

function App() {
  const [mode, setMode] = useState('light') //Wheather dark mode is enable or not.
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212520";
      document.title = 'textForm - Dark Mode'; //change title dynsmically
      showAlert("Dark mode has been enabled", "success");
      /* setInterval(()=>{
        document.title = 'textForm - Please Visit';
      },1000)
      setInterval(()=>{
        document.title = 'textForm - Install Apk';
      },2000)
      setInterval(()=>{
        document.title = 'textForm - Download Data';
      },3000) */ //Not recomded this is bad userExperience
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'textForm - Light Mode'; //change title
    }
  }

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}


  return (
    /* You can return only one element in React here we return "div"  given below*/
    /* so there is a way to use multiple element by using "<></>" */
    // <h1></h1> Error aa jayega
    // This is called Jsx Fragment Babel compiles JSX down to React.createElement() calls and JSX will be converted to JavaScript on browser using a transpiler - babel.js.
    //   <h1 className="App">Website</h1> 1st element * Error nhi aayega 
    //   React prefere "Camel Case" meand ie- htmlFor, className, tabIndex (pahle chota fir bada like unt  hota h na jo ange chota piche bda hota h ushi tarah "camel case" hota h) 
    <>

      <Navbar /* name="Abhay Dubey" About="hii" */ mode={mode} toggleMode={toggleMode} />
      <div style = {{height: '50px'}}>
        {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>}
        </div>
      <Routes mode={mode}>
      <Route exact path="/alertpage" element={<Alert alert={alert} />} />
        <Route exact path="/textformpage" element={<Home mode={mode} />} />
        <Route path="/aboutpage" element={<About mode={mode} />} />
        <Route path="/" element={<TextForm mode={mode} text="Enter You Text" showAlert={showAlert} />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;