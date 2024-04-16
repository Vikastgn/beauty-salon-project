import React from 'react';
import styled from "styled-components";

export const Main = () => {
    return (
        <div>

            <div>
                <h1>Салон красоты «Delote-Beauty» на Крестовском</h1>
                <span>Прокрутите вниз</span>
            </div>

            <ImageContainer />
        </div>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    height: 1038px;
    background-image: url('../../../assets/images/photo.webp');
    background-size: cover;
    background-position: center;
`