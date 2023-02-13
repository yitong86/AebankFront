import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import homesplash from '../../assets/homesplash.jpg'

const Home = () => {
  return (
    <Container>
    
      <Splash image={homesplash} style={{color: "#010101",position:"fixed",width:"100%",height:"100%"}}>
        <h1 style={{textShadow:"1px 1px black"}}>Welcome to Aebank!</h1>
        <h2 style={{textShadow:"1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000,-1px 0 0 #000"}}>24 hours service</h2>
        </Splash>
    </Container>
    
  )
}

export default Home;