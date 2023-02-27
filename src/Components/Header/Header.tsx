import s from './Header.module.css';
import Vector from '../../assets/img/Vector.png';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/Shape.png';
import { Button } from 'components/shared/Button';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allCategories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  return (
    <div className={s.headerContainer}>
      <div className={s.headerContentContainer}>
        <div className={s.logoContainer}>
          <img src={logo} alt="logo" />
          <p className={s.logoName}>crypter</p>
          <p
            className={s.headerLink}
            onClick={() => {
              setIsOpen(true);
            }}>
            All
          </p>
          {isOpen && (
            <div
              onBlur={() => {
                alert('m');
              }}
              className={s.allCategoriesContainer}>
              {allCategories.map((category, index) => (
                <a href="" key={index}>
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className={s.searchContainer}>
          <div className={s.inputContainer}>
            <input type="text" placeholder="Search" className={s.headerInput} />
            <img src={search} alt="search" className={s.inputGlass} />
          </div>
          <button className={s.headerButtonBell}>
            <img src={Vector} alt="nottifications" />
          </button>
          <Button
            color={'blue'}
            onClickHandler={() => {
              console.log('Upload');
            }}>
            Upload
          </Button>
          <Button
            color={'white'}
            onClickHandler={() => {
              console.log('Connect Wallet');
            }}>
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
