import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Master} from "./Master";
import master1 from "../../../assets/images/masters/master-1.webp"
import master3 from "../../../assets/images/masters/master-3.webp"
import master4 from "../../../assets/images/masters/master-4.webp"
import master5 from "../../../assets/images/masters/master-5.webp"
import master6 from "../../../assets/images/masters/master-6.webp"

export const Masters = () => {
    return (
        <StyledMasters>
            <SectionTitle>Наши мастера</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Master src={master1} name={"Елена Васильевна"} text={"Визажист"}/>
                <Master src={master3} name={"Елена Васильевна"} text={"Визажист"}/>
                <Master src={master1} name={"Елена Васильевна"} text={"Визажист"}/>
                <Master src={master4} name={"Елена Васильевна"} text={"Визажист"}/>
                <Master src={master5} name={"Елена Васильевна"} text={"Визажист"}/>
                <Master src={master6} name={"Елена Васильевна"} text={"Визажист"}/>
            </FlexWrapper>
        </StyledMasters>
    );
};

const StyledMasters = styled.section `
    background-color: darksalmon;
    min-height: 100vh;
`