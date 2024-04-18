import React from 'react';
import styled from "styled-components";

type StyledImagePropsType = {
    src?: string
    title?: string
}
export const ImagesServices = (props: StyledImagePropsType) => {
    return (
        <StyledServices>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
        </StyledServices>
    );
};

const StyledServices = styled.div`
    width: 25%;
    background-color: rgba(47, 138, 154, 0.68);
    margin: 10px;
`


const Image = styled.img`
    min-width: 100%;
    height: 300px;
`

const Title = styled.h3 `

`