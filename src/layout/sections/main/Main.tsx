import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/photo.jpg'


export const Main = () => {
    return (
        <div>

                <ImageContainer >
                    <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                    <MainTitle>Салон красоты «Delote-Beauty» на Крестовском</MainTitle>
                    <TextBtn>Прокрутите вниз</TextBtn>
                    </FlexWrapper>
                </ImageContainer>

        </div>
    );
};


const ImageContainer = styled.div`
    background-color: burlywood;
    width: 100%;
    height: 1038px;
    background-image: url(${photo});
    background-size: cover;
    background-position: center;
`
const MainTitle = styled.h1 `
color: white;
`
const TextBtn = styled.span `
color: white;
`