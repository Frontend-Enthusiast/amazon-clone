import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValues } from '../StateProvider';
import { auth } from '../firebaseConfig';
const Header = () => {
    const [{ basket, user }] = useStateValues();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazonLogo' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchOutlinedIcon className='header__searchIcon' />
            </div>
            <div className='header__nav' onClick={handleAuthentication}>
                <Link to={!user && '/login'} className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email} </span>
                        <span className='header__optionLineTwo'>{user ? 'Sign-Out' : 'Sign-In'}</span>
                    </div>
                </Link>
                {/* <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link> */}
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header