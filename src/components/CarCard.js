import React from 'react'
import styled from 'styled-components'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import TimerIcon from '@mui/icons-material/Timer';
import Fade from 'react-reveal/Fade';

const Card = styled.div`
margin-top:1rem;
background:transparent;
display:flex;
flex-direction:column;
width:100%;
height:45rem;
align-items:center;
justify-content:center;

`;

const Tagline = styled.div`
font-size:30px;
width:30%;
`;

const CarDetail = styled.div`
width:70%;
`; 

const CarName = styled.div`
line-height:4rem;
font-size:20px;
`;

const CarType = styled.div`
font-size:16px;
line-height:3rem;
`;

const CarImage = styled.img`
height:370px;
width:700px;

`;

const CarFeature = styled.div`
display:flex;
justify-content:center; 
align-items:center;

line-height:7rem

`;

const MainFeatures = styled.div`
display: inline-flex;
flex-direction:row;
flex-wrap:wrap;
justify-content: space-between;


`;
const HorsePower = styled.div`
display:inline-flex;
justify-content:flex-start;
align-items:center;

`;

const TopSpeed = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:3rem;
text-align: center; 

`;

const MainTurn = styled.div`
display:flex;
align-items:center;

margin-left:3rem;
text-align: center; 
`;

function CarCard() {
  return (
    
    <Card>
        <Tagline>
            <Fade top>
            <h2>Choose The Best Car</h2>
            </Fade>
            </Tagline>
        <br />
        <CarDetail>
            <Fade top>
            <CarName><h3>Koenigsegg Agera R</h3></CarName>
            <CarImage src='images/agera.png' />
            </Fade>
            
        </CarDetail>
        <CarFeature>
            <Fade bottom>
                <MainFeatures>
                    <HorsePower>
                        <ElectricBoltIcon />
                        <h2 style={{ 'margin-left':'0.5rem' }}>1,160 hp @ 7,800 rpm</h2>
                    </HorsePower>
                    <TopSpeed>
                        <SpeedOutlinedIcon fontSize='large'/>
                        <h2 style={{ 'margin-left':'0.5rem' }}> 277.8mph</h2>
                    </TopSpeed>
                    <MainTurn>
                        <TimerIcon fontSize='large' />
                        <h2 style={{ 'margin-left':'0.5rem' }}>2.8 Seconds</h2>
                    </MainTurn>
                </MainFeatures>
                </Fade>
            </CarFeature>
    </Card>
    
  )
}

export default CarCard