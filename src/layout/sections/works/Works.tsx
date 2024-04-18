import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import work1 from "../../../assets/images/works/work-1.webp"
import work2 from "../../../assets/images/works/work-2.webp"
import work3 from "../../../assets/images/works/work-3.webp"
import work4 from "../../../assets/images/works/work-4.webp"
import work5 from "../../../assets/images/works/work-5.webp"
import work6 from "../../../assets/images/works/work-6.webp"
import work7 from "../../../assets/images/works/work-7.webp"
import work8 from "../../../assets/images/works/work-8.webp"
import work9 from "../../../assets/images/works/work-9.webp"

const worksItems = [ "Показать все", "Парикмахерские услуги", "Маникюр", "Педикюр"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Наши работы</SectionTitle>

            <Menu menuItems={worksItems}/>

            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Work src={work1}/>
                <Work src={work2}/>
                <Work src={work3}/>
                <Work src={work4}/>
                <Work src={work5}/>
                <Work src={work6}/>
                <Work src={work7}/>
                <Work src={work8}/>
                <Work src={work9}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section `
    min-height: 100vh;
    background-color: rgba(101, 66, 122, 0.83);
`