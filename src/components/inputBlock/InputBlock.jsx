import Button from '../button/Button'

import search from 'src/assets/icon/search.svg';

import './inputBlock.scss';

const InputBlock = ({ style, placeholder, styleInput, buttonTitle, img }) => {
    return (
        <section className="inputBlock" style={style}>
            <img src={search} alt="" className="inputBlock__img" style={img} />
            <input placeholder={placeholder} style={styleInput} className="inputBlock__input" type="text" />
            <Button title={buttonTitle} style={{ width: '130px' }} />
        </section>
    )
}

export default InputBlock