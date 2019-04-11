
import React, { useState } from 'react'
import ReactDOM from 'react-dom';


const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age
    return (
      <div>
        <p>Hello {name}, you are {age} year old</p>
        <p>So you were probably born {bornYear()}</p>
      </div>
    )
  }

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
  )

  const App = (props) => {
    const [counter, setCounter] = useState(0)
    const setToValue = (value) => setCounter(value)

/*     const increaseByOne = () =>
      setCounter(counter + 1)
    
    const setToZero = () =>
      setCounter(0) */


/*     setTimeout(
      () => setCounter(counter + 1),
      1000
    ) */
    
/*     console.log('renderöidään', counter)
 */
    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={() => setToValue(counter + 1)}
          text='plus'
        />
        <Button
          handleClick={() => setToValue(counter - 1)}
          text='minus'
        />
        <Button
          handleClick={() => setToValue(0)}
          text='zero'
        />
      </div>
    )

  }



  

/*     const nimi = 'Pekka'
    const ika = 10
    return (
    <div>
        <h1>Greetings</h1>
        <Hello name="Arto" age={26 + 10} />
        <Hello name={nimi} age={ika}/>
    </div> */

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


//serviceWorker.unregister();
