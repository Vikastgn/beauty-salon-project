import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ImagesServices} from "./imagesServices/ImagesServices";
import imageService1 from "../../../assets/images/services/cosmetology.webp";
import imageService2 from "../../../assets/images/services/hairdressing-services.webp";
import imageService3 from "../../../assets/images/services/make-up.webp";
import imageService4 from "../../../assets/images/services/manicure.webp";
import imageService5 from "../../../assets/images/services/massage.webp";
import imageService6 from "../../../assets/images/services/pedicure.webp"


const services = [
    {
        imgSrc: imageService1,
        title: "Косметология"
    },
    {
        imgSrc: imageService2,
        title: "Косметология"
    },
    {
        imgSrc: imageService3,
        title: "Косметология"
    },
    {
        imgSrc: imageService4,
        title: "Косметология"
    },
]

export const Services = () => {
    return (
        <StyledServices>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                {/*{*/}
                {/*    services.map( s => <ImagesServices src={s.imgSrc} title={s.title}/> )*/}
                {/*}*/}


                <ImagesServices src={imageService1} title={"Косметология"}/>
                <ImagesServices src={imageService2} title={"Парикмахерские услуги"}/>
                <ImagesServices src={imageService3} title={"Визаж"}/>
                <ImagesServices src={imageService4} title={"Маникюр"}/>
                <ImagesServices src={imageService5} title={"Эстетист по телу"}/>
                <ImagesServices src={imageService6} title={"Педикюр"}/>

            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section `
    background-color: chocolate;
    min-height: 100vh;
`