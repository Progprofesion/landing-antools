import InputBlock from '../inputBlock/InputBlock';

import './contribute.scss';

const Contribute = () => {
    return (
        <section className='contribute'>
            <h2 className="contribute__title fz-48-500">Become a contributor?</h2>
            <h3 className="contribute__subtitle fz-18-500">Join us and get tips & tricks to become a great <br /> Designer and Developer</h3>
            <InputBlock buttonTitle={'Join Us'} style={{ width: '550px', margin: '0 auto' }}>
                <input placeholder='Enter your email...' className="inputBlock__input inputBlock__inputContribute " type="text" />
            </InputBlock>
        </section>
    )
}

export default Contribute