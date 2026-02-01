import Signin from './pages/auth/singin';
import { CustomBtn } from './components/customBtn';
import { CustomInput } from './components/customInput';

import './App.css';

function App() {
  const handleClick =() => {
    console.log("Yes!!!")
  }

  return (
    <div className="App">
      <CustomBtn value={"Are you stupid?"} onClick={handleClick}/>
    </div>
  );
}

export default App;
