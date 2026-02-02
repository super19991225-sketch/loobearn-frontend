import { useEffect, useState } from 'react';

import { CustomInput } from '../../../components/customInput';
import { CustomBtn } from '../../../components/customBtn';

import smallLogo from '../../../images/logo/logo2.png';
import vector from '../../../images/vector/Vector.png';

import './signin.scss';

const Signin = () => {
  const [degree, setDeg] = useState([]);
  useEffect(() => {}, []);

  return (
    <div className="signin-page">
      <div className="signin-header">
        <div className="logo">
          <img src={smallLogo} alt="small-logo" />
        </div>
        <div className="auth-status">
          <CustomBtn value={'Log In'} />
          <CustomBtn value={'Sign Up'} />
        </div>
      </div>
      <div className="signin-body">
        <div className="signin-logo">
          <div className="vectors">
            <img
              src={vector}
              alt="vector"
              style={{ transform: 'rotate(30deg)' }}
            />
          </div>
        </div>
        <div className="signin-input"></div>
      </div>
    </div>
  );
};

export default Signin;
