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
            THIS SITE USES JWT / REDUXTOOLKIT/ MONGODB / EXPRESS / REACT / NODEJS / REACT-BOOTSTRAP 

          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={LunarBank} />
      </Card>

         
        </div>
      </>


  )
} 
export default HomeScreen
