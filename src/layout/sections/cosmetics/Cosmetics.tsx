import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Cosmetics = () => {
    return (
        <StyledCosmetics>
            <FlexWrapper align={"center"} justify={"center"}>
                <Icon iconId={"k"}/>
                <Icon iconId={"oribe"}/>
                <Icon iconId={"alterna"}/>
                <Icon iconId={"coppola"}/>
            </FlexWrapper>
        </StyledCosmetics>
    );
};

const StyledCosmetics = styled.div `
    background-color: #d26b54;
    min-height: 20vh;
`