
import './button.scss';

const Button = ({ title, fn, type, style }) => {
    return (
        <div className="button" >
            <button
                style={style}
                type={type}
                className="button__view"
                onClick={fn}
            >{title}</button>
        </div>
    )
}

export default Button