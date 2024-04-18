import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <WorkImage src={props.src} alt=""/>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: aquamarine;
    margin: 10px;
    max-width: 416px;
    width: 100%;
`
const WorkImage = styled.img`
    width: 100%;
    height: 416px;
    object-fit: cover;
`