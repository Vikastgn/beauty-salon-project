import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = [ "Главная", "Мастера", "Косметика", "Акции", "Отзывы", "Контакты"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #3ebb3e;
    display: flex;
    justify-content: space-between;
`