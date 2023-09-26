import React from 'react'
import '../styles/homescreen.css'
import Card from 'react-bootstrap/Card';
import Buttom from'react-bootstrap/Button';
import LunarBank from '../styles/LunarBank.jpg';




const HomeScreen = () => {
  return ( 
          <>    

      <div className="homeScreen">
       
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
          LUNAR BANKING A SITE BUILT WITH 
    REACT/ REDUX/ NODE / EXPRESS / MONGODB / MONGOOSE / JSON WEB TOKEN 
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={LunarBank} />
      </Card>

         
        </div>
      </>


  )
} 
export default HomeScreen
