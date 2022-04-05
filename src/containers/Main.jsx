import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

// import icon

import Camera from "../assets/icons/cameraIcon.svg"
import Logo from "../assets/Logo/Logo.svg"
import TV from "../assets/icons/tvIcon.svg"
import Messange from "../assets/icons/messangerIcon.svg"
import More from "../assets/icons/moreIcon.svg"
import Heart from "../assets/icons/heartIcon.svg"
import Comment from "../assets/icons/commentIcon.svg"
import Save from "../assets/icons/saveIcon.svg"


// import user

import User from "../assets/images/user1.png"
import PostImg from "../assets/images/post_img.png"

const Main = () => {
    return (
        <Wrapper>
            <div className='main-container'>
                <div className='main-container__header'>
                    <div className='camera'>
                        <img src={Camera} alt='camera' />
                    </div>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='messager'>
                        <img src={TV} alt="tv" />
                        <img src={Messange} alt="messager" />
                    </div>
                </div>
                <div className='main-container__user'>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                    <div className='user-Box'>
                        <img src={User} alt="user" />
                        <p>Your Story</p>
                    </div>
                </div>
                <div className='main_container__post'>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                    <div>
                        <div className='post-header'>
                            <div className='post-header__user-icon'>
                                <img src={User} alt="user" />
                                <div className='post-header__user-text'>
                                    <p>joshua_l</p>
                                    <p>Tokyo, Japan</p>
                        
                                </div>
                            </div>
                            <div>
                                <img src={More} alt="more-icon" />
                            </div>
                        </div>
                        <div className='post-media'>
                            <img src={PostImg} alt="" />
                            <button>1/3</button>
                        </div>
                        <div className='post-footer'>
                            <div className='footer-icon'>
                                <div>
                                    <img src={Heart} alt='heartIcon'/>
                                    <img src={Comment} alt='heartIcon'/>
                                    <img src={Messange} alt='heartIcon'/>
                                </div>

                                <div>
                                    <img src={Save} alt=""/>
                                </div>
                            </div>
                            <div className='footer-other'>
                                <img src={User} alt="user" />
                                <p>Liked by <span> craig_love</span> and  <span> 44,686 others</span> </p>
                            </div>
                            <p className='post-footer-comment'>joshua_l The game in Japan was amazing and I want to share some photos</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    );
}

export default Main;

const Wrapper = styled.div`
    .main-container__header {
        margin-top: 10px;
        padding: 0 16px 0 12px;
        height: 27px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
    }

    .logo img {
        margin-top: 10px;
        width: 105px;
        height: 28px;
    }

    .messager {
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .messager img {
        float: right;
        margin: 0 9px;
    }

    .main-container__user {
        margin-top: 15px;
        padding: 9px 10px 8px 10px;
        width: 100%;
        height: 98px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 20px;
        overflow-y: scroll;
    }

    .main-container__user::-webkit-scrollbar {
        display: none;
    }

    .user-Box {
        width: 62px;
        height: 81px;
    }

    .user-Box img {
        width: 62px;
        height: 62px;
        border-radius: 50%;
    }

    .user-Box p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01px;
        color: #262626;
    }

    .main_container__post {
        width: 100%;
        height: 547px;
        overflow-y: scroll;
    }

    .main_container__post::-webkit-scrollbar {
        display: none;
    }

    .post-header {
        padding: 11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .post-header__user-icon {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .post-header__user-icon img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .post-header__user-text p:first-child {
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.1px;
        color: #262626;
    }

    .post-header__user-text p:last-child {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.07px;
        color: #262626;
    }

    .post-media {
        width: 100%;
        height: 375px;
        position: relative;
    }

    .post-media img,
    .post-media video {
        width: 100%;
        height: 100%;
    }

    .post-media button {
        position: absolute;
        top: 14px;
        right: 14px;
        padding: 6px 8px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        background: rgba(18, 18, 18, 0.7);
        border-radius: 13px;
        color: #F9F9F9;
        border: none;
    }

    .post-footer {
        padding: 10px 14px;
    }

    .footer-icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer-icon img:nth-child(2){
        margin: 0 17px; 
    }

    .footer-other {
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 6.5px;
    }

    .footer-other img {
        width: 17px;
        height: 14px;
        border-radius: 50%;
    }

    .footer-other p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.07px;
        color: #262626;
    }

    .footer-other p span {
        font-weight: 600;
        font-size: 15px;
    }

    .post-footer .post-footer-comment {
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.1px;
        color: #262626;
    }
`
