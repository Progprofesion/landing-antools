import Button from '../button/Button';

import figmaIcon from '../../assets/icon/figmaIcon.svg';
import sketchIcon from '../../assets/icon/sketchIcon.svg';
import vsCodeIcon from '../../assets/icon/vsCodeIcon.svg';
import notionIcon from '../../assets/icon/notionIcon.svg';
import slackIcon from '../../assets/icon/slackIcon.svg';
import invisionIcon from '../../assets/icon/invisionIcon.svg';
import likeIcon from '../../assets/icon/likeIcon.svg';
import addIcon from '../../assets/icon/addIcon.svg';
import redLikeIcon from '../../assets/icon/redLikeIcon.svg';
import activeAddIcon from '../../assets/icon/activeAddIcon.svg';

import './popular.scss';

const Popular = () => {
    return (
        <section className='popular'>
            <h2 className="popular__title fz-48-500">Most Popular Tools</h2>
            <h3 className="popular__subtitle fz-18-500">Tools for the best Designers and Developers
                <br />
                most popularly used in the world</h3>
            <ul className="popular__tools fz-16-400">
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={figmaIcon} alt="figma" className="popular__figmaIcon" />
                        <div className="popular__wrappTitle">
                            <h4 className="popular__itemTitle">FIGMA</h4>
                            <div className="popular__itemSubtitle">Free</div>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemTools">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item activePopular">
                    <div className="popular__wrapp">
                        <img src={sketchIcon} alt="Sketch" className="popular__Sketch" />
                        <div className="popular__wrappTitle">
                            <h4 className="popular__itemTitle activeTitle">Sketch</h4>
                            <div className="popular__itemSubtitle activeSubtitle">Trial & Paid</div>
                        </div>
                    </div>
                    <p className="popular__descr activeDescr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemTools">
                        <div className="popular__like activeLike"><img src={redLikeIcon ? redLikeIcon : likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={activeAddIcon} alt="add" /></div>
                        <div className="popular__visit fz-16"><Button title='Visit' style={{ width: '106px', height: '42px', lineHeight: '0px' }} /></div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={vsCodeIcon} alt="Visual Studio Code" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h4 className="popular__itemTitle">Visual Studio Code</h4>
                            <div className="popular__itemSubtitle">Free</div>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemTools">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={notionIcon} alt="Notion" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h4 className="popular__itemTitle">Notion</h4>
                            <div className="popular__itemSubtitle">Free & Paid</div>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemTools">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={slackIcon} alt="Slack" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h4 className="popular__itemTitle">Slack</h4>
                            <div className="popular__itemSubtitle">Free & Paid</div>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemTools">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={invisionIcon} alt="Invision" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h4 className="popular__itemTitle">Invision</h4>
                            <div className="popular__itemSubtitle">Free & Paid</div>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemTools">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
            </ul>
            <button className="popular__button">Load more</button>
        </section>
    )
}

export default Popular