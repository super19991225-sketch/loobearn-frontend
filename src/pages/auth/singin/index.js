import { CustomInput } from '../../../components/customInput';
import { CustomBtn } from '../../../components/customBtn';

import smallLogo from '../../../images/logo/logo2.png';

import './signin.scss';

const Signin = () => {
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
      <div className="signin-body"></div>
    </div>
  );
};

export default Signin;
