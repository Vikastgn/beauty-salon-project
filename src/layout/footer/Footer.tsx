import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Contacts} from "../../components/contacts/Contacts";
import {WorkingTime} from "../../components/workingTime/WorkingTime";
import {FlexWrapper} from "../../components/FlexWrapper";
import {FooterTitle} from "../../components/FooterTitle";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-around"}>
                <Icon iconId={"omega"}/>
                <Contacts/>
                <WorkingTime/>
                <Inst>
                    <FooterTitle>Мы в Instagram</FooterTitle>
                    <Icon iconId={"instagram"}/>
                </Inst>

            </FlexWrapper>
            <Copyright> Copyright © 2017 - 2024</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
    background-color: rgba(183, 71, 165, 0.68);
    min-height: 20vh;
`
const Inst = styled.div `

`
const Copyright = styled.small `
    display: flex;
    justify-content: center;
`
