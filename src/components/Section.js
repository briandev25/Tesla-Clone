import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({heading,text,image,leftButtonText, rightButtonText}) {
  return (
    <Wrap image={image}>
        <Fade bottom>
        <ItemText>
            <h1>{heading}</h1>
            <p>{text}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
        <ButtonWrapper>
            <Fade left>
            <LeftButton>{leftButtonText}</LeftButton> 
              </Fade>   
            <Fade right>
            {rightButtonText && 
            <RightButton>
            {rightButtonText}
            </RightButton>}
            </Fade>
        </ButtonWrapper>
        </Fade>
         <DownArrow src='/images/down-arrow.svg'/>
        </Buttons>
        
        
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
background:${props => `url(${props.image}) center center / cover no-repeat`}

`
const ItemText = styled.div`
 padding-top:15vh;
 text-align:center;
`
const ButtonWrapper = styled.div`
display:flex;
margin-bottom:16px;
  @media(max-width:768px){
      display:block;
  }
`
const LeftButton = styled.div`
border-radius:32px;
height:40px;
width:256px;
display:flex;
align-items:center;
justify-content:center;
padding:4px 24px;
text-align:center;
font-size:12px;
font-weight:500;
background-color:rgba(23,26,32,0.8);
color:#fff;
cursor:pointer;
margin:8px;
`
const RightButton = styled(LeftButton)`
background-color:#fff;
opacity:0.65;
color:#393c41;
`
const DownArrow = styled.img`
font-size:14px;
width:40px;
height:40px;
color:393c41;
margin:20px 0;
animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`