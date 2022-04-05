import React from 'react';
import styled from 'styled-components';
import User from "../assets/images/user1.png"
import BarsIcon from "../assets/icons/barsIcon.svg"
import Search from "../assets/icons/searchIcon.svg"
import Plus from "../assets/icons/plusIcon.svg"
import Heart from "../assets/icons/heartIcon.svg"
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <Wrapper>
            <div className='footer-container'>
                <NavLink to="/main" className='footer-container__icon-box'>
                    <img src={BarsIcon} alt='' className='icon'/>
                </NavLink>
                <NavLink to="/search" className='footer-container__icon-box'>
                    <img src={Search} alt='' className='icon'/>
                </NavLink>
                <NavLink to="/newPost" className='footer-container__icon-box'>
                    <img src={Plus} alt='' className='icon'/>
                </NavLink>
                <NavLink to="/likes" className='footer-container__icon-box'>
                    <img src={Heart} alt='' className='icon'/>
                </NavLink>
                <NavLink to="/profile" className='footer-container__icon-box'>
                    <img src={User} alt='user' className='user'/>
                </NavLink>
            </div>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
    width: 100%;
    height: 72px;
    border-top: 1px solid #262626;
    position: absolute;
    bottom: 0;

    .footer-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .footer-container__icon-box {
        width: 75px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    } 

    .user {
        width: 23px;
        height: 23px;
    }

    .active {
    }
`
