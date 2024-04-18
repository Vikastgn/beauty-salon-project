import React from 'react';
import styled from "styled-components";


type StyledMasterPropsType = {
    src: string
    name: string
    text: string
}
export const Master = (props: StyledMasterPropsType) => {
    return (
        <StyledMaster>
            <PhotoMaster src={props.src}/>
            <NameMaster>{props.name}</NameMaster>
            <Specialization>{props.text}</Specialization>
        </StyledMaster>
    );
};

const StyledMaster =styled.div`
    width: 25%;
    background-color: #692a12;
    margin: 10px;
`

const NameMaster = styled.h6 `

`
const PhotoMaster = styled.img`
    min-width: 100%;
    height: 477px;
    object-fit: cover;
`

const Specialization = styled.p `

`