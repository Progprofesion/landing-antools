import logoMicrosoft from '../../assets/icon/logoMicrosoft.svg';
import logoGoogle from '../../assets/icon/logoGoogle.svg';
import logoSlack from '../../assets/icon/logoSlack.svg';
import logoWordpress from '../../assets/icon/logoWordpress.svg';

import './trust.scss';

const Trusted = () => {
    return (
        <section className="trust">
            <div className="trust__wrapp">
                <h3 className="trust__title fz-24-500">Trusted more than 150+ brand</h3>
                <div className="trust__ellipse"></div>
                <div className="trust__companyWrapp">
                    <div className="trust__companyWrapp-microsoft">
                        <img src={logoMicrosoft} alt="Microsoft" />
                    </div>
                    <img src={logoGoogle} alt="google" />
                    <img src={logoSlack} alt="slack" />
                    <img src={logoWordpress} alt="wordPress" />
                </div>
            </div>
        </section>
    )
}

export default Trusted