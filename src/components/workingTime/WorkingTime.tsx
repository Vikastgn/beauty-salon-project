import React from 'react';
import styled from "styled-components";
import {FooterTitle} from "../FooterTitle";


export const WorkingTime = () => {
    return (
        <StyledTime>

                <FooterTitle>Режим работы</FooterTitle>
                <Time>C 10:00 до 21:00 (Пн-Пт)</Time>
                <Time>С 11:00 до 20:00 (Сб-Вс)</Time>

        </StyledTime>
    );
};

const StyledTime = styled.div `

`
const Time = styled.p `

`