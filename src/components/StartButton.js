import React from 'react'
import styled from 'styled-components';

const ButtonStart = styled.a`
margin-top:10%;

border:1px solid green;
padding:70px 60px;
border-radius:100%;
color:wheat;


&:hover{
    border:3px solid #00F504; 
    color:white;

    box-shadow: -0.5px 3px 60px 0.5px #0ff;
}

`;

const MainDiv = styled.div`

margin-bottom:5rem;
padding:35px 15px;
border-radius:100%;
position:relative;
justify-content:center;
`;

const ButtonText =styled.div``;
var mainaudio = new Audio('music/ignition.wav');
const audio = () => {
    mainaudio.play();
};

const outaudio = () => {  
    mainaudio.pause();
    mainaudio.currentTime = 0;
}

function StartButton() {
  return (
    <MainDiv>
        <ButtonStart onMouseOver={audio} onMouseOut={outaudio}>
       
            Start
        
        </ButtonStart>
    </MainDiv>
  )
}

export default StartButton