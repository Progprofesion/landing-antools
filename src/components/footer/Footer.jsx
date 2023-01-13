// import iconAntools from 'src/assets/icon/iconAntools.svg';
import iconAntools from 'src/assets/icon/iconAntools.svg';

import './footer.scss';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="footer__antools">
                <div className="footer__wrapp">
                    <img src={iconAntools} alt="antools" className="footer_wrapp-img" />
                    <div className="footer__wrapp-title fz-22-600">antools</div>
                </div>
                <p className="footer__copy">Copyright 2021. Antools</p>
                <p className="footer__descr">Antool is a web collection of information on paid or free Design and Development tools</p>
            </div>
            <div className="footer__contact fz-16-500">
                <div className="footer__title fz-20-500">Contact Us</div>
                <p className="footer__number">+621987463</p>
                <p className="footer__address">M Building, No.10 A</p>
                <p className="footer__email">antools@awesome.com</p>
            </div>
            <div className="footer__categories fz-16-500">
                <div className="footer__title fz-20-500">Categories</div>
                <p className="footer__design"><a href="#!">Design</a></p>
                <p className="footer__development"><a href="#!">Development</a></p>
            </div>
            <div className="footer__info fz-16-500">
                <div className="footer__title fz-20-500">Company Info</div>
                <p className="footer__about"><a href="#!" >About Us</a></p>
                <p className="footer__partners"><a href="#!">Our Partners</a></p>
                <p className="footer__blog"><a href="#!" >Blog</a></p>
            </div>
        </section>
    )
}

export default Footer