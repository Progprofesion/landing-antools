import Button from '../button/Button';

import zeplinLogo from 'src/assets/icon/zeplinLogo.svg';
import phpstormLogo from 'src/assets/icon/phpstormLogo.svg';
import toolboxLogo from 'src/assets/icon/toolboxLogo.svg';
import procreateLogo from 'src/assets/icon/procreateLogo.svg';
import likeIcon from 'src/assets/icon/likeIcon.svg';
import addIcon from 'src/assets/icon/addIcon.svg';

import './newcomer.scss';

const Newcomer = () => {
    return (
        <section className='newcomer'>
            <div className="newcomer__wrappHeader">
                <h2 className="newcomer__wrappHeader-title fz-48-500">Newcomer Tools</h2>
                <h3 className="newcomer__wrappHeader-subtitle fz-18-500">Wow! see the latest update of the most recommended tools from reliable designers and developers</h3>
                <Button style={{ width: '200px', height: '60px', fontWeight: '500', fontSize: '18px' }} title='Explore more' />
            </div>
            <div className="newcomer__tools">
                <div className="newcomer__tools-item ">
                    <div className="newcomer__wrapp">
                        <div className="newcomer__tools-wrapp">
                            <div className="newcomer__tools-img">
                                <img src={zeplinLogo} alt="" />
                            </div>
                            <div className="newcomer__tools-wrappTitle">
                                <h3 className="newcomer__tools-title fz-24-500">Zeplin</h3>
                                <h4 className="newcomer__tsubtitle fz-18orange">Free & Paid</h4>
                            </div>
                        </div>
                        <p className="newcomer__tools-descr fz-14-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="newcomer__itemPanel">
                            <div className="newcomer__like"><img src={likeIcon} alt="" /></div>
                            <div className="newcomer__addItem"><img src={addIcon} alt="" /></div>
                            <div className="newcomer__visit fz-16-600">Visit</div>
                        </div>
                    </div>
                </div>
                <div className="newcomer__tools-item">
                    <div className="newcomer__wrapp activeNewcomer">
                        <div className="newcomer__tools-wrapp">
                            <div className="newcomer__tools-img">
                                <img src={phpstormLogo} alt="phpstorm" />
                            </div>
                            <div className="newcomer__tools-wrappTitle">
                                <h3 className="newcomer__tools-title">PHPStorm</h3>
                                <h4 className="newcomer__tools-subtitle">Free</h4>
                            </div>
                        </div>
                        <p className="newcomer__tools-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="newcomer__itemPanel">
                            <div className="newcomer__like"><img src={likeIcon} alt="" /></div>
                            <div className="newcomer__addItem"><img src={addIcon} alt="" /></div>
                            <div className="newcomer__visit fz-16-600">
                                <Button title='Visit' style={{ width: '106px', height: '42px', lineHeight: '0' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newcomer__tools-item">
                    <div className="newcomer__wrapp">
                        <div className="newcomer__tools-wrapp">
                            <div className="newcomer__tools-img">
                                <img src={toolboxLogo} alt="Toolbox" />
                            </div>
                            <div className="newcomer__tools-wrappTitle">
                                <h3 className="newcomer__tools-title fz-24-500">Toolbox</h3>
                                <h4 className="newcomer__tools-subtitle fz-18orange">Free</h4>
                            </div>
                        </div>
                        <p className="newcomer__tools-descr fz-14-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="newcomer__itemPanel">
                            <div className="newcomer__like"><img src={likeIcon} alt="" /></div>
                            <div className="newcomer__addItem"><img src={addIcon} alt="" /></div>
                            <div className="newcomer__visit fz-16-600">Visit</div>
                        </div>
                    </div>
                </div>
                <div className="newcomer__tools-item">
                    <div className="newcomer__wrapp">
                        <div className="newcomer__tools-wrapp">
                            <div className="newcomer__tools-img">
                                <img src={procreateLogo} alt="Procreate" />
                            </div>
                            <div className="newcomer__tools-wrappTitle">
                                <h3 className="newcomer__tools-title fz-24-500">Procreate</h3>
                                <h4 className="newcomer__tools-subtitle fz-18orange">Paid</h4>
                            </div>
                        </div>
                        <p className="newcomer__tools-descr fz-14-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="newcomer__itemPanel">
                            <div className="newcomer__like"><img src={likeIcon} alt="" /></div>
                            <div className="newcomer__addItem"><img src={addIcon} alt="" /></div>
                            <div className="newcomer__visit fz-16-600">Visit</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newcomer