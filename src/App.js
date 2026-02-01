import Signin from './pages/auth/singin';
import { CustomBtn } from './components/customBtn';
import { CustomInput } from './components/customInput';

import './App.css';

function App() {
  const handleClick = () => {
    console.log("Yes!!!")
  }

  const handleChangeInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <CustomInput onChange={handleChangeInput} />
      <CustomBtn value={"Are you stupid?"} onClick={handleClick} />
    </div>
  );
}

export default App;
