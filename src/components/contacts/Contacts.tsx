import React from 'react';
import styled from "styled-components";
import {FooterTitle} from "../FooterTitle";


export const Contacts = () => {
    return (
        <StyledContacts>
                <FooterTitle>Контакты</FooterTitle>
                <Number>+7 (812) 123-45-67</Number>
                <Number>+7 (911) 123-45-67</Number>
                <Address>Новоостровский проспект, дом 36 лит. С</Address>

        </StyledContacts>
    );
};

const StyledContacts = styled.div `

`
const Number = styled.p `

`
const Address = styled.p `

`