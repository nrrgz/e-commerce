import React from 'react';
import "./UserCard.scss";
import UserImg from "../../assets/images/user.png";
import Money from "../../assets/icons/moneys.svg"
import Coin from "../../assets/icons/coin.svg"
import Receipt from "../../assets/icons/receipt-item.svg"
import Heart from "../../assets/icons/heart-like.svg"
import Settings from "../../assets/icons/setting-2.svg"
import Logout from "../../assets/icons/logout.svg"

const UserCard = ({ handleLogout }) => {

  return (
    <div className="modal-overlay-card">
      <div id="modal" className='modal-card'>
        <div className="user-card">
          <div className="user-detail">
            <img src={UserImg} alt="user image" />
            <div className="user-info">
              <h3>Yelena Stacia</h3>
              <h5>Platinum Member</h5>
            </div>
          </div>
          <div className="wallet">
            <h2>Wallet</h2>
            <div className="wallet-line">
              <div className="wallet-column">
                <img src={Money} alt="money" />
                <h4>Lenny Balance</h4>
              </div>
              <p>$928,28</p>
            </div>
            <div className="wallet-line">
              <div className="wallet-column">
                <img src={Coin} alt="coin" />
                <h4>Lenny Coins</h4>
              </div>
              <p>0.092</p>
            </div>
          </div>
          <div className="user-menu">
            <h2>Menu</h2>
            <div className="menu-line">
              <img src={Receipt} alt="receipt" />
              <h4>Purchase</h4>
            </div>
            <div className="menu-line">
              <img src={Heart} alt="heart" />
              <h4>Wishlist</h4>
            </div>
            <div className="menu-line">
              <img src={Settings} alt="settings" />
              <h4>Settings</h4>
            </div>
          </div>
          <div className="sign-out">
            <img src={Logout} alt="logout" />
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;