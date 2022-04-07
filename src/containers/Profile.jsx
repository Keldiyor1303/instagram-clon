import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';

// import icon

import PrivateIcon from "../assets/icons/privateIcon.svg"
import Down from "../assets/icons/downIcon.svg"
import MenuBar from "../assets/icons/menuIcon.svg"
import GridIcon from "../assets/icons/gridIcon.svg"
import TabsIcon from "../assets/icons/tagsIcon.svg"

import User from "../assets/images/user1.png"
import Gallary from "../assets/images/profileImg.png"

// profileSidebar Icons import

import Archive  from "../assets/icons/archiveIcon.svg"
import YourActivity  from "../assets/icons/yourActivityIcon.svg"
import Nametag  from "../assets/icons/nametagIcon.svg"
import Saved  from "../assets/icons/savedIcon.svg"
import CloseFriends  from "../assets/icons/closeFrindsIcon.svg"
import DiscoverPeople  from "../assets/icons/discoverPeopleIcon.svg"
import OpenFacebook  from "../assets/icons/openFacebookIcon.svg"
import Setting  from "../assets/icons/settingIcon.svg"

const profileSidebar = [
    {img: Archive, text: "Archive"},
    {img: YourActivity, text: "Your Activity"},
    {img: Nametag, text: "Nametag"},
    {img: Saved, text: "Saved"},
    {img: CloseFriends, text: "Close Friends"},
    {img: DiscoverPeople, text: "Discover People"},
    {img: OpenFacebook, text: "Open Facebook"},
    {img: Setting, text: "Setting"},
]

const Profile = () => {
    const navigate = useNavigate();

    function SideBar () {
        const profileSidebar = document.querySelector('.profileSidebar')
        profileSidebar.classList.toggle('open')
    }
    return (
        <Wrapper>
            <div className='profile-container'> 
                <div className='profile-container__header'>
                    <div></div>
                    <div className='header__username'>
                        <img src={PrivateIcon} alt="privateIcon" />
                        <p>mirafzal</p>
                        <img src={Down} alt="down" />
                    </div>
                    <div onClick={SideBar}>
                        <img src={MenuBar} alt="menu-bar" className='menu-bar' />
                    </div>
                </div>
                <div className='profile-container__info'>
                    <div className='info'>

                        <div className='info__userImg'>
                            <img src={User} alt="user" />
                        </div>
                        <div className='info__statistics'>
                            <div className='statistics__posts'>
                                <h4>54</h4>
                                <p>Posts</p>
                            </div>
                            <div className='statistics__followers'>
                                <h4>834</h4>
                                <p>Followers</p>
                            </div>
                            <div className='statistics__following'>
                                <h4>162</h4>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    <div className='info-text'>
                        <b>Jacob West</b>
                        <p>Digital goodies designer @pixsellz <br/>
                            Everything is designed.
                        </p>
                    </div>
                </div>
                <div className='editProfile-and_storys'>
                    <div className='editProfile__btn'>
                        <button onClick={() => navigate("/profileEdit")}>Edit Profile</button>
                    </div>
                    <div className='storys__new'>
                        <div className='storys__new-add'>
                            <div>
                                <button>+</button>
                            </div>
                            <p>Friends</p>
                        </div>
                        <div className='storys__new-box'>
                            <div>
                                <img src={User} alt="" />
                            </div>
                            <p>Friends</p>
                        </div>
                        <div className='storys__new-box'>
                            <div>
                                <img src={User} alt="" />
                            </div>
                            <p>Friends</p>
                        </div>
                        <div className='storys__new-box'>
                            <div>
                                <img src={User} alt="" />
                            </div>
                            <p>Friends</p>
                        </div>
                        <div className='storys__new-box'>
                            <div>
                                <img src={User} alt="" />
                            </div>
                            <p>Friends</p>
                        </div>
                    </div>
                </div>
                <div className='gallary-content'>
                    <div className='tabs'>
                        <NavLink to="/profile" className='tabs__grid-tab'>
                            <img src={GridIcon} alt='' />
                        </NavLink>
                        <NavLink to="/profile" className='tabs__grid-tab'>
                            <img src={TabsIcon} alt='' />
                        </NavLink>
                    </div>
                    <div className='gallary'>
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div>
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div>
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div>
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                        <div className='gallary__card'>
                            <img src={Gallary} alt='gallaryImg' />
                        </div> 
                
                    </div>
                </div>
            </div>
            <div className='profileSidebar'>
                {profileSidebar.map(({img, text}) => (
                    <div className='profileSidebar__icon' key={Math.random()}>
                        <img src={img} alt="profileIcon" />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
}

export default Profile;

const Wrapper = styled.div`  
 display: flex;
 
 .profile-container {
     width: 375px;
    position: absolute;
    top: 0;
    left: 0;
 }
 
 .profile-container__header {
     padding: 11px 18px;
     margin-top: 60px;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }

 .header__username {
     display: flex;
     align-items: center;
     gap: 5px;
 }

 .header__username p {
    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.33px;
    color: #262626;
 }

 .info {
     padding: 0 16px 0 11px;
     display: flex;
     align-items: center;
     gap: 35px;
 }

 .info__userImg {
     padding: 5px;
     text-align: center;
     width: 96px;
     height: 96px;
     border-radius: 50%;
     border: 1.5px solid #C7C7CC;
 }

 .info__userImg img {
     width: 100%;
     height: 100%;
     border-radius: 50%;
 }

 .info__statistics {
     display: flex;
     align-items: center;
     gap: 20px;
 }

 .info__statistics h4 {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #262626;
 }

 .info__statistics p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.1px;
    color: #262626;
 }

 .info-text {
     padding: 0 16px;
     margin-top: 12px;
 }

 .info-text b {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #262626;
 }

 .info-text p {
    margin-top: 1px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #262626;    
 }

 .editProfile-and_storys {
     margin-top: 15px;
     width: 100%;
 }

 .editProfile__btn {
    width: 100%;
    padding: 0 16px;
 }

 .editProfile__btn button {
    width: 100%;
    height: 29px;
    margin-bottom: 16px; 
    background: #FFFFFF;
    border: 1px solid rgba(60, 60, 67, 0.18);
    box-sizing: border-box;
    border-radius: 6px;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #262626;
 }
 
 .storys__new {
     margin-top: 16px;
     padding: 0 51px 0 14px;
     text-align: center;
     width: 100%;
     display: flex;
     align-items: center;
     gap: 18px;
     overflow-y: scroll;
 }

 .storys__new::-webkit-scrollbar {
     display: none;
 }

 .storys__new-add div {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #C7C7CC;
    position: relative;
 }

 .storys__new-add button {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     font-size: 25px;
     border: none;
     background: none;
 }

 .storys__new-add p {
     margin-top: 3px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.01px;
    color: #262626; 
 }

 .storys__new-box div {
     padding: 4px;
     width: 64px;
     height: 64px;
     border-radius: 50%;
     border: 1px solid #C7C7CC;
 }

 .storys__new-box div img {
     width: 100%;
     height: 100%;
 }

 .tabs {
    display: flex;
    align-items: center;
 }

 .tabs {
     border-top: 1px solid rgba(0, 0, 0, 0.3);
     margin-top: 15px;
     width: 100%;
     height: 44px;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }

 .tabs__grid-tab {
     width: 50%;
     height: 44px;
     display: flex;
     align-items: center;
     justify-content: center;
 }

 .tabs__grid-tab:first-child {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 3px;
 }

 .gallary {
     width: 100%;
     height: 257px;
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(124px, 1fr));
     overflow-y: scroll;
 }

 .gallary::-webkit-scrollbar {
     display: none;
 }

 .gallary__card {
     width: 124px;
     height: 124px;
 }

 .gallary__card img,
 .gallary__card video {
     width: 100%;
     height: 100%;
 }

 .profileSidebar {
    display: none; 
    position: absolute;
    top: 0;
    right: -251px;
    width: 251px;
    height: 100%;
    background-color: #f9f9f9;
    transition: 5s;
    z-index: 10
}

.profileSidebar.open {
    transition: .5s;
    display: block;
    position: absolute;
    top: 0;
    right: 0px;
    z-index: 1;
}

.menu-bar {
    position: relative;
    z-index: 100;
}

.profileSidebar {
    padding: 120px 20px;
}

.profileSidebar__icon {
    padding: 12.5px 0 12.5px 15.75px;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.profileSidebar__icon p {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.25px;
    color: #262626;
}
`