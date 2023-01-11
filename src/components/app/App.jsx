
import Header from '../header/Header';
import Polular from '../popular/Popular';
import Trusted from '../trusted/Trusted';
import Newcomer from '../newcomer/Newcomer';
import Swiper from '../swiper/Swiper';
import Contribute from '../contribute/Contribute';
import Footer from '../footer/Footer';

import './app.scss'

const app = () => {
    return (
        <main className='app'>
            <div className="container">
                <Header />
                <Polular />
                <Trusted />
                <Newcomer />
                <Swiper />
                <Contribute />
                <Footer />
            </div>
        </main>
    )
}

export default app