import React from 'react';
import { Button } from '../ButtonElement';
import { IInfoObjDTO } from '../../core/IInfoObjDTO';
import { BtnWrap, Column1,Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoSectionElements';



interface IInfoSection {
  obj: IInfoObjDTO;
}

const InfoSection: React.FC<IInfoSection> = ({ obj }) => {
  return (
    <>
      <InfoContainer lightBg={obj.lightBg} id={obj.id}>
        <InfoWrapper>
          <InfoRow imgStart={obj.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{obj.topLine}</TopLine>
                <Heading lightText={obj.lightText}>{ obj.headline}</Heading>
                <Subtitle darkText={obj.lightTextDes}>{ obj.description}</Subtitle>
                <BtnWrap>
                  <Button 
                    to="home"  
                    smooth={true}
                    duration={500}
                    primary={obj.primary} 
                    offset={-80}
                    dark={obj.dark}> {obj.buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={obj.img} alt={obj.altTag}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;