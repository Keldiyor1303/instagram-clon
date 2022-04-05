import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Likes = () => {
    const navigate = useNavigate()

    useEffect(() => navigate("/likes/following"), [navigate])

    return (
        <Wrapper>

        </Wrapper>
    );
}

export default Likes;

const Wrapper = styled.div`

    
    
`
