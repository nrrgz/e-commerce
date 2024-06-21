import React, { useEffect, useState } from 'react';
import "./SignUp.scss";
import Facebook from "../../assets/icons/facebook.svg";
import axios from 'axios';

const initialUser = { email: "", password: "", username: "" };

const SignUp = ({ handleCloseModal, handleSignUpSuccess, setModalType }) => {
  const [user, setUser] = useState(initialUser);

  const handleChangeUser = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const signUp = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local/register`;
      if (user.username && user.password && user.email) {
        const res = await axios.post(url, user);
        if (!!res) {
          setUser(initialUser);
          handleSignUpSuccess();
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOutsideClick = (event) => {
    if (!document.getElementById('modal').contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleCloseModal]);

  return (
    <div className="modal-overlay">
      <form onSubmit={(e) => {
        e.preventDefault();
        signUp();
      }}>
        <div id="modal" className="modal">
          <h2>Sign Up</h2>
          <div className="sign-in-input">
            <h4>Name</h4>
            <input type="text" placeholder="Enter your full name" name="username"
              value={user.username} onChange={handleChangeUser} />
          </div>
          <div className="sign-in-input">
            <h4>Phone Number or Email</h4>
            <input type="email" placeholder="Enter your phone number or email" name="email"
              value={user.email} onChange={handleChangeUser} />
          </div>
          <div className="sign-in-input">
            <h4>Password</h4>
            <input type="password" placeholder="Enter your password" name="password"
              value={user.password} onChange={handleChangeUser} />
          </div>
          <p className="sign-in-input-text">Getting Trouble?</p>
          <button>Sign Up</button>
          <p className="other-method" onClick={() => setModalType('signin')}>Or using other method</p>
          <div className="sign-in-fb">
            <img src={Facebook} alt="facebook" />
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <p>Sign In with Facebook</p>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
