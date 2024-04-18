import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const ListOfPrices = () => {
    return (
        <StyledListOfPrices>
            <FlexWrapper direction={"column"}>
                <PriceTitle>Женская укладка</PriceTitle>
                <PriceText>+ обработка кончинков волос</PriceText>
                <Price>1 000 ₽ </Price>
            </FlexWrapper>

        </StyledListOfPrices>
    );
};

const StyledListOfPrices = styled.div`

`

const PriceTitle = styled.h4`

`

const PriceText = styled.p`

`

const Price = styled.p`

`
