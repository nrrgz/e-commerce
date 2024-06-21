import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";
import Cart from "../../assets/icons/shopping-cart.svg";
import UserImg from "../../assets/images/user.png";
import User from "../../assets/icons/userclosed.svg";
import Notification from "../../assets/icons/notification.svg";
import Sms from "../../assets/icons/sms.svg";
import Menu from "../../assets/icons/menu.svg";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/slices/categorySlice";
import UserCard from "../UserCard";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserCard, setShowUserCard] = useState(false);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const toggleUserCard = () => {
    setShowUserCard(!showUserCard);
  };

  const { items: categories, loading, error } = useSelector((state) => state.categories);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, [dispatch]);

  const handleUserWrapperClick = () => {
    setModalType('signup');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  const handleSignUpSuccess = () => {
    setModalType('signin');
  };

  const handleSignInSuccess = () => {
    setIsLoggedIn(true);
    handleCloseModal();
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setShowUserCard(false); 
    navigate("/");
  };

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className='header-wrapper'>
        <Link to="/" className='link'>
          <div className="header-logo">
            <div className="header-logo-image">
              <img src={Logo} alt="logo" />
            </div>
            <p>lenny.</p>
          </div>
        </Link>
        <form className="header-search" onSubmit={handleSearchSubmit}>
          <select>
            <option>All Categories</option>
            {loading && <option>Loading...</option>}
            {error && <option>Error loading categories</option>}
            {!loading && !error && categories.length > 0 && categories.map(category => (
              <option key={category.id} value={category.id}>{category.attributes.title}</option>
            ))}
          </select>
          <div className="header-search-input">
            <input
              type="text"
              placeholder='Search on lenny...'
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">
              <img src={Search} alt="search" />
            </button>
          </div>
        </form>
        <div className="header-cart">
          <div className="cart-wrapper">
            <Link to="/shopping-chart" className='link'>
              <div className="cart">
                <img src={Cart} alt="shopping-cart" />
                {totalCartItems > 0 && <span className="cart-count">{totalCartItems}</span>}
              </div>
            </Link>
            <img src={Notification} alt="notification" />
            <div className="sms-wrapper">
              <img src={Sms} alt="sms" />
            </div>
            <div className="menu-wrapper">
              <img src={Menu} alt="menu" />
            </div>
          </div>
          {isLoggedIn ? (
            <div className="user-wrapper">
              <img src={UserImg} alt="user image" onClick={toggleUserCard} />
              {showUserCard && <UserCard user={user} handleLogout={handleLogout} />}
            </div>
          ) : (
            <div className="user-wrapper-closed" onClick={handleUserWrapperClick}>
              <img src={User} alt="user" />
            </div>
          )}
        </div>
        {modalOpen && modalType === 'signup' && <SignUp handleCloseModal={handleCloseModal} handleSignUpSuccess={handleSignUpSuccess} setModalType={setModalType} />}
        {modalOpen && modalType === 'signin' && <SignIn handleCloseModal={handleCloseModal} handleSignInSuccess={handleSignInSuccess} setModalType={setModalType} />}
        {modalOpen && modalType === 'success' && <Success handleCloseModal={handleCloseModal} />}
      </div>
    </>
  );
};

export default Header;
