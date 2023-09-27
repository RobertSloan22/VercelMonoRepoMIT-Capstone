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
        THIS APPLICATION HAS BEEN BUILT WITH:  SECURE LOGIN / JWT /
            MONGODB -ATLAS  DATABASE CLUSTER / REDUX-TOOLKIT/ 
            EXPRESS / REACT / NODE.JS / REACT-BOOTSTRAP / REST - API / 
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
