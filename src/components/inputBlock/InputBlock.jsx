import Button from '../button/Button'

import './inputBlock.scss';


const InputBlock = ({ style, buttonTitle, children }) => {
    return (
        <section className="inputBlock" style={style}>
            {children}
            <Button title={buttonTitle} style={{ width: '130px' }} />
        </section>
    )
}

export default InputBlock