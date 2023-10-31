import React from 'react';
import ReactDOM from 'react-dom';
import Boxes from './Boxes';
import Box from "./components/Box";
import './index.css';


function App(){
  const [square, setSquare] = React.useState(Boxes)


  function toggle(id) {
    setSquare(prevSquare => {
      return prevSquare.map((squares) => {
        return squares.id === id ? {...squares, on: !squares.on} : squares;
          //square.id === id ---- id match with the toggle(id) 
            //if matched - true ---{...square, on: !square.on} ---replace old obj with brand new
            //{...square, on: !square.on} --- ...square---pull all value and override on: !square.on value with opposite
      })
    })
  }

  const squareElements = square.map(squares => (
    <Box key={squares.id} on={squares.on} toggle={() => toggle(squares.id)}/>
  ))
  return (
    <div>
    {squareElements}
    </div>
  )
  
}



ReactDOM.render(<App darkMode={true}/>, document.getElementById('root'));


