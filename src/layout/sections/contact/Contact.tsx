import React from 'react';
import styled from "styled-components";
import {Contacts} from "../../../components/contacts/Contacts";
import {WorkingTime} from "../../../components/workingTime/WorkingTime";
import {FlexWrapper} from "../../../components/FlexWrapper";
import map from "../../../assets/images/map.jpeg"

export const Contact = () => {
    return (
        <StyledContact>
            <Map src={map}/>
            <FlexWrapper justify={"space-around"}>
                <Contacts/>
                <WorkingTime/>
                <Contacts/>
                <WorkingTime/>
            </FlexWrapper>

        </StyledContact>
    );
};

const StyledContact = styled.section `
    background-color: rgba(105, 90, 90, 0.77);
`

const Map = styled.img `
    height: 576px;
    max-width: 1296px;
    display: block;
    margin: 0 auto;
`