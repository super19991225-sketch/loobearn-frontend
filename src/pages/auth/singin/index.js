import { useEffect, useState } from 'react';

import { CustomInput } from '../../../components/customInput';
import { CustomBtn } from '../../../components/customBtn';

import smallLogo from '../../../images/logo/logo2.png';
import vector from '../../../images/vector/Vector.png';

import './signin.scss';

const Signin = () => {
  const [degrees, setDeg] = useState([]);
  useEffect(() => {
    var array = [];
    for (let i = -75; i < 0; i += 3) {
      array.push(i);
    }
    setDeg(array);
  }, []);

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
            {degrees.map((degree, idx) => (
              <img
                src={vector}
                alt="vector"
                key={idx}
                style={{
                  transform: `rotateX(${degree}deg) rotateY(${degree - 10}deg)`,
                  opacity: `${-degree / 75}`
                }}
              />
            ))}
          </div>
        </div>
        <div className="signin-input"></div>
      </div>
    </div>
  );
};

export default Signin;
