import React, { useState } from 'react';
import styled from 'styled-components';
import image from "../assets/images/nootbook.png"
import Card from '../components/search/Card';
import { Link } from 'react-router-dom';

import searchimg from "../assets/images/search.svg"
import doston from "../assets/images/doston.jpg"
import Footer from '../components/Footer';


const Search = () => {

    const imgData = [
        { id: 1, image: image },
        { id: 2, image: image },
        { id: 3, image: image },
        { id: 4, image: image },
        { id: 5, image: image },
        { id: 6, image: image },
        { id: 7, image: image },
        { id: 8, image: image },
        { id: 9, image: image },
        { id: 10, image: image },
        { id: 11, image: image },
        { id: 12, image: image },
        { id: 13, image: image },
        { id: 14, image: image },
        { id: 15, image: image },
        { id: 16, image: image },
        { id: 17, image: image },
        { id: 18, image: image },
        { id: 19, image: image },
        { id: 20, image: image },
        { id: 21, image: image },
        { id: 22, image: image },
        { id: 23, image: image },
        { id: 24, image: image },
        { id: 25, image: image },
        { id: 26, image: image },
        { id: 27, image: image },
    ]

    const nameList = [
        { name: "Keldiyor", image: doston },
        { name: "Mirabzal", image: doston },
        { name: "Hasanali", image: doston },
        { name: "Javohir", image: doston },
        { name: "Doniyor", image: doston },
        { name: "Keldiyorrr", image: doston },
    ]

    const [data, setData] = useState([])

    const search = (e) => {
        let faceData = []
        for (let i = 0; i < nameList.length; i++) {
            let name = nameList[i].name.toUpperCase()
            if ((name.search(e.target.value.toUpperCase()) >= 0) && (e.target.value !== "")) faceData.push(nameList[i])
        }

        setData(faceData)
    }

    return (
        <>
            <Wrapper>
                <div className="search">
                    <input type="text" placeholder='Search' onChange={(e) => search(e)} />
                    <img src={searchimg} alt="" />
                </div>


                <ul className="users">
                    {
                        data.map(({ name, image }) => {
                            return (
                                <Link to="/">
                                    <img src={image} alt="" />
                                    <h2>{name}</h2>
                                </Link>
                            )
                        })}
                </ul>

                <div className="cards">
                    {
                        imgData.map(data => <Card key={data.id} data={data} />)
                    }
                </div>

            </Wrapper>
            <Footer className="footer" />
        </>
    );
}

export default Search;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .search {
        position: relative;
        
        input {
            width: calc(100% - 16px);
            height: 36px;
            margin: 4px 8px 12px;
            padding-left: 34px;
            border-radius: 10px;
            background: rgba(118, 118, 128, 0.12);
            outline: none;
            border: none;

            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.3px;

            ::placeholder {
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.3px;
                color: rgba(60, 60, 67, 0.6);
            }
        }

        img {
            position: absolute;
            top: calc(50% - 4px);
            left: 26px;
            transform: translate(-50%, -50%);
        }
    }

    .cards {
        height: calc(812px - 168px);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(124px, 1fr));
        grid-auto-rows: 124px;
        grid-auto-flow: dense;
        gap: 1px;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 0;
        }
    }    

    .users {
        width: 100%;
        max-height: calc(812px - 164px);
        background-color: white;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        padding: 0 8px;
        position: absolute;
        top: 48px;
        background-color: white;

        ::-webkit-scrollbar {
            width: 0;
        }

        a {
            width: 100%;
            height: 36px;
            color: black;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;

            img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
            }
        }
    }

    
`
