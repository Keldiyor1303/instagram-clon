import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


// import img 

import User from "../assets/images/user1.png"
const ProfileEdit = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div className='edit-profile-container'>
                <div className='edit-profile__header'>
                    <p onClick={() => navigate(-1)}>Cancel</p>
                    <b>Edit Profile</b>
                    <span>Done</span>
                </div>
                <div className='edit-profile__change-profile-photo'>
                    <img src={User} alt="user" />
                    <p>Change Profile Photo</p>
                </div>
                <div className='edit-profile__user-info'>
                    <div>
                        <p>Name</p>
                        <p>Username</p>
                        <p>Website</p>
                        <p>Bio</p>
                    </div>
                    <div>
                        <p>Jacob West</p>
                        <p>jacob_w</p>
                        <p>Website</p>
                        <p>Digital goodies designer @pixsellz Everything is designed.</p>
                    </div>
                </div>
                <div className='edit-profile__privateInformation'>
                    <h4>Switch to Professional Account</h4>
                    <h5>Private Information</h5>
                    <div className='professionalAccount__info'>
                        <div>
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Gender</p>
                        </div>
                        <div>
                            <p>jacob.west@gmail.com</p>
                            <p>+1 202 555 0147</p>
                            <p>Male</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default ProfileEdit;

const Wrapper = styled.div`

    .edit-profile-container {
        margin-top: 12px;
        width: 100%;
        height: 100%;
    }

    .edit-profile__header {
        padding: 0 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #262626;
        }

        b {
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #262626;
        }

        span {
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #3897F0;
        }
    }

    .edit-profile__change-profile-photo {
        margin-top: 11px;
        padding: 18.5px 0 12px 0;
        text-align: center;
        width: 100%;
        height: 160.5px;

        img {
            width: 95px;
            height: 95px;
            border-radius: 50%;
        }

        p {
            margin-top: 12.5px;
            font-weight: 600;
            font-size: 13px;
            line-height: 21px;
            letter-spacing: -0.05px;
            color: #3897F0;
        }
    }

    .edit-profile__user-info {
        width: 100%;
        height: 208px;
        display: flex;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        div {
            width: 100px;
            height: 100%;
            padding: 0 16px;

            p {
                padding: 15px 0;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: -0.25px;
                color: #262626;
            }
        }

        div:last-child {
            width: 100%;
            p:not(p:first-child) {
                border-top: 1px solid rgba(0, 0, 0, 0.2);
            }
        }
    }

    .edit-profile__privateInformation {
        h4 {
            padding: 16px 0 15px 16px;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: -0.25px;
            color: #3897F0;
       } 

       h5 {
        padding: 14px 16px; 
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: -0.25px;
        color: #262626;
       }
    }

    .professionalAccount__info {
        display: flex;
        align-items: center;

        div {
            width: 100px;
            height: 100%;
            padding: 0 16px;

            p {
                padding: 15px 0;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: -0.25px;
                color: #262626;
            }
        }

        div:last-child {
            width: 100%;
            p:not(p:first-child) {
                border-top: 1px solid rgba(0, 0, 0, 0.2);
            }
        }
    }
`
