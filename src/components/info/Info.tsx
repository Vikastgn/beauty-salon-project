import React from 'react';
import styled from "styled-components";

export const Info = () => {
    return (
        <StyledInfo>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.
                Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</Text>
        </StyledInfo>
    );
};

const StyledInfo =styled.div`
    border: 1px solid red;
    max-width: 500px;
    text-align: center;
    margin: 50px;
`
const Text =styled.p`

`
