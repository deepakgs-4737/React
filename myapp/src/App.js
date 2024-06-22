import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Keys from './components/keys/Keys'
// import Main from './components/conditional/Main';
import Header from './components/Header';
import Counter from './components/Counter';
// import States from './components/States';
import { Container } from "react-bootstrap";



function App() {
                      /*contents written here are called JSX*/
  return(
  <div className='App'> 
    <Keys/>

    <Container>
      {/* <States/> */}
    </Container>


    {/* <button onClick={addCount}>Increase count</button */}
    <Header/>        {  /* self closing tag*/}
    <br></br>
    
  </div> 
  );
}

export default App;



