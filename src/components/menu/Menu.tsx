import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Главная</a>
                </li>
                <li>
                    <a href="">Мастера</a>
                </li>
                <li>
                    <a href="">Косметика</a>
                </li>
                <li>
                    <a href="">Акции</a>
                </li>
                <li>
                    <a href="">Отзывы</a>
                </li>
                <li>
                    <a href="">Контакты
                    </a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
    ul {
        display: flex;
        gap: 30px
    }
`