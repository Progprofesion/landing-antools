import InputBlock from '../inputBlock/InputBlock';

import './contribute.scss';

const Contribute = () => {
    return (
        <section className='contribute'>
            <h2 className="contribute__title fz-48-500">Become a contributor?</h2>
            <h3 className="contribute__subtitle fz-18-500">Join us and get tips & tricks to become a great <br /> Designer and Developer</h3>
            <InputBlock placeholder='Enter your email...' style={{ margin: '0 auto', width: '550px', height: '65px' }} styleInput={{ width: '270px', marginLeft: '24px', marginRight: '115px' }} buttonTitle='Join Us' img={{ display: 'none' }} />
        </section>
    )
}

export default Contribute