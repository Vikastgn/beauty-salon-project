import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {PriceOfServices} from "./PriceOfServices";
import {Footer} from "../../footer/Footer";


export const Prices = () => {
    return (
        <StyledPrices>
            <SectionTitle>Цены на услуги</SectionTitle>
            <PriceOfServices/>
            <PriceOfServices/>
            <PriceOfServices/>
            <Footer/>
        </StyledPrices>
    );
};

const StyledPrices = styled.section`
    min-height: 100vh;
    background-color: gray;
`