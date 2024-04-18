import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import pricePhoto from  "../../../assets/images/process.webp"
import {ListOfPrices} from "./listOfPrices";


export  const PriceOfServices = () => {
    return (
        <StyledPriceOfServices>
            <FlexWrapper >
                <ImagePrice src={pricePhoto} alt=""/>
                <ListOfPrices/>
                <ListOfPrices/>
                <ListOfPrices/>
                <ListOfPrices/>
            </FlexWrapper>

        </StyledPriceOfServices>
    );
};

const StyledPriceOfServices = styled.div`
    min-height: 100vh;
    background-color: #c26565;
`
const ImagePrice = styled.img`
    width: 100%;
    max-width: 636px;
    height: 536px;
    object-fit: cover;
`

