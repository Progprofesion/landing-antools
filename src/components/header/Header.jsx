import Button from '../button/Button';
import InputBlock from '../inputBlock/InputBlock';

import iconAntools from 'src/assets/icon/iconAntools.svg';
import headerIllustration from 'src/assets/img/headerIllustration.svg';
import facebook from 'src/assets/icon/facebook.svg';
import instagram from 'src/assets/icon/instagram.svg';
import twitter from 'src/assets/icon/twitter.svg';
import check from 'src/assets/icon/check.svg';
import search from 'src/assets/icon/search.svg';

import './header.scss';

const Header = () => {
    return (
        <section className="header">
            <div className="header__wrapp">
                <div className="header__wrappIcon">
                    <div className="header__icon">
                        <img src={iconAntools} alt="icon" />
                    </div>
                    <h3 className="header__label  fz-22-600">antools.</h3>
                </div>
                <nav className="header__wrappLink fz-16-500">
                    <a href='#!' className='header__home'>Home</a>
                    <a href='#!' className='header__catigories'>Catigories</a>
                    <img src={check} alt="" className="header__checkImg" />
                    <a href='#!' className='header__collection'>My Collections</a>
                    <a href='#!' className="header__blog">Blog</a>
                </nav>
                <div className="header__wrappLogin">
                    <a href='#!' className="header__login">Login</a>
                    <Button title={'Sign Up'} />
                </div>
            </div>
            <h1 className="header__title fz-50-500">
                Awesome tools for
                Designer & Developer
                <span>.</span>
            </h1>
            <p className="header__subtitle">
                Antool is a web collection of information on paid or free Design and Development tools
            </p>
            <InputBlock buttonTitle='Search' >
                <img src={search} alt="" className="inputBlock__img" />
                <input placeholder='find more than 430+ tools...' className="inputBlock__input" type="text" />
            </InputBlock >
            <img src={headerIllustration} alt="Illustration" className="header__img" />
            <div className="header__social">
                <a href="#!"><img src={facebook} alt="facebook" /></a>
                <a href="#!"><img src={instagram} alt="instagram" /></a>
                <a href="#!"><img src={twitter} alt="twitter" /></a>
            </div>
        </section>
    )
}

export default Header