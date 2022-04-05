import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignal, faWifi, faBatteryFull} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <Wrapper>
            <div className="header-container">
                <div className="header-container__time">
                    <p>6:14</p>
                </div>

                <div className="header-container__statusBar">
                    <FontAwesomeIcon className='icon' icon={faSignal} />
                    <FontAwesomeIcon className='icon' icon={faWifi} />
                    <FontAwesomeIcon className='icon' icon={faBatteryFull} />
                </div>
            </div>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    padding: 14px 14px 15px 21px;
    width: 100%;
    height: 44px;

    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-container__time p {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #171717;
    }

    .header-container__statusBar .icon {
        margin: 0 5px;
        font-size: 17px;
        font-weight: 900;
    }
`
