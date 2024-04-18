import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Info} from "../../../components/info/Info";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const AboutUs = () => {
    return (
        <StyledAboutUs>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quota"}/>
                <Info/>
            </FlexWrapper>

        </StyledAboutUs>
    );
};

const StyledAboutUs =styled.section `
    min-height: 50vh;
    background-color: darkseagreen;
`