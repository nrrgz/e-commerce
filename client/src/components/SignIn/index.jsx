import React, { useEffect, useState } from 'react';
import "./SignIn.scss";
import Facebook from "../../assets/icons/facebook.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { storeUser } from "../../helpers"

const initialUser = { identifier: "", password: "" };

const SignIn = ({ handleCloseModal, handleSignInSuccess, setModalType }) => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChangeUser = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const signIn = async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          handleSignInSuccess(data);
          setUser(initialUser);
          navigate("/");
          handleCloseModal();
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
        signIn();
      }}>
        <div id="modal" className="modal">
          <h2>Sign In</h2>
          <div className="sign-in-input">
            <h4>Phone Number or Email</h4>
            <input type="email" placeholder="Enter your phone number or email" name="identifier"
              value={user.identifier} onChange={handleChangeUser} />
          </div>
          <div className="sign-in-input">
            <h4>Password</h4>
            <input type="password" placeholder="Enter your password" name="password"
              value={user.password} onChange={handleChangeUser} />
          </div>
          <p className="sign-in-input-text">Getting Trouble?</p>
          <button>Sign In</button>
          <p className="other-method" onClick={() => setModalType('signup')}>Or using other method</p>
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

export default SignIn;
