import Button from '../button/Button';

import figmaIcon from 'src/assets/icon/figmaIcon.svg';
import sketchIcon from 'src/assets/icon/sketchIcon.svg';
import vsCodeIcon from 'src/assets/icon/vsCodeIcon.svg';
import notionIcon from 'src/assets/icon/notionIcon.svg';
import slackIcon from 'src/assets/icon/slackIcon.svg';
import invisionIcon from 'src/assets/icon/invisionIcon.svg';
import likeIcon from 'src/assets/icon/likeIcon.svg';
import addIcon from 'src/assets/icon/addIcon.svg';
import redLikeIcon from 'src/assets/icon/redLikeIcon.svg';
import activeAddIcon from 'src/assets/icon/activeAddIcon.svg';

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
                            <h3 className="popular__itemTitle">FIGMA</h3>
                            <h4 className="popular__itemSubtitle">Free</h4>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemPanel">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item activePopular">
                    <div className="popular__wrapp">
                        <img src={sketchIcon} alt="Sketch" className="popular__Sketch" />
                        <div className="popular__wrappTitle">
                            <h3 className="popular__itemTitle">Sketch</h3>
                            <h4 className="popular__itemSubtitle">Trial & Paid</h4>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemPanel">
                        <div className="popular__like activeLike"><img src={redLikeIcon ? redLikeIcon : likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={activeAddIcon} alt="add" /></div>
                        <div className="popular__visit fz-16"><Button title='Visit' style={{ width: '106px', height: '42px', lineHeight: '0px' }} /></div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={vsCodeIcon} alt="Visual Studio Code" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h3 className="popular__itemTitle">Visual Studio Code</h3>
                            <h4 className="popular__itemSubtitle">Free</h4>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemPanel">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={notionIcon} alt="Notion" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h3 className="popular__itemTitle">Notion</h3>
                            <h4 className="popular__itemSubtitle">Free & Paid</h4>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemPanel">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={slackIcon} alt="Slack" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h3 className="popular__itemTitle">Slack</h3>
                            <h4 className="popular__itemSubtitle">Free & Paid</h4>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemPanel">
                        <div className="popular__like"><img src={likeIcon} alt="heart" /></div>
                        <div className="popular__addItem"><img src={addIcon} alt="add" /></div>
                        <div className="popular__visit fz-16">Visit</div>
                    </div>
                </li>
                <li className="popular__item">
                    <div className="popular__wrapp">
                        <img src={invisionIcon} alt="Invision" className="popular__Sketch" />
                        <div className="popular__wrappTitle ">
                            <h3 className="popular__itemTitle">Invision</h3>
                            <h4 className="popular__itemSubtitle">Free & Paid</h4>
                        </div>
                    </div>
                    <p className="popular__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="popular__itemPanel">
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