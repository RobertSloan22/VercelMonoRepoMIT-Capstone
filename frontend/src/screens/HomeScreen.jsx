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
          <Card.Header>
        THIS SITE IS BUILD WITH SECURE LOGIN / JWT / REDUXTOOLKIT/ MONGODB /
            EXPRESS / REACT / NODEJS / REACT-BOOTSTRAP / REST - API
            JAVASCRIPT / CSS STYLING/ DEPLOYED TO THE CLOUD/
            [A FULLSTACK MERN APPLICATION] - ROBERT A, SLOAN
            
         </Card.Header>
          <Card.Text>

          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={LunarBank} />
      </Card>

         
        </div>
      </>


  )
} 
export default HomeScreen
