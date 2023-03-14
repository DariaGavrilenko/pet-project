import s from './Header.module.css';
import Vector from '../../assets/img/Vector.png';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/Shape.png';
import { Button } from 'components/shared/Button';
import { useState } from 'react';
import cn from 'classnames';
import { Typography } from 'components/shared/Typography';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allCategories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
  // const refTest = useRef(null);
  // console.log(refTest);
  // const onBlurHandle = (e: FocusEvent<HTMLDivElement, Element>) => {
  //   console.log(e.currentTarget);
  //   setIsOpen(false);
  // };
  return (
    <div className={s.headerContainer}>
      <div className={s.headerContentContainer}>
        <div className={s.logoContainer}>
          <img src={logo} alt="logo" />
          <p className={s.logoName}>crypter</p>
          <div className={s.headerLinkContainer}>
            <Typography
              className={s.headerLink}
              onMouseMove={() => {
                setIsOpen(true);
              }}
              onClick={() => {
                setIsOpen(true);
              }}
              color={'grey'}
              variant={'h3'}>
              All
            </Typography>
            {/* {isOpen && ( */}
            <div
              tabIndex={1}
              // ref={refTest}
              // onBlur={onBlurHandle}
              // onFocus={() => {
              //   console.log('focus');
              // }}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
              className={cn(s.allCategoriesContainer, { [s.test]: isOpen })}>
              {allCategories.map((category, index) => (
                <a href="" key={index} className={s.categoryLink}>
                  {category}
                </a>
              ))}
            </div>
            {/* )} */}
          </div>
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
