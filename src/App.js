
import './App.css';
import { useState, useEffect } from 'react';

// import imgprofile from './assets/images/gem.jpg'

// const Person = (userName) => component created to test the props is working well.{

//   return(
//     <>
//       <img src={imgprofile} alt='imgprofile' width="150px" />
//       <h1>Name: {userName.name}</h1>
//       <h2>Last Name: {userName.lastName}</h2>
//       <h3>Age: {userName.age}</h3>
//       <hr/>
//     </>
//   )

// }

function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(10);
  }, [])

  return (
    <div className="App">
      {/* <Person name={'Gem'} lastName={'Creation'} age={23} use for props/>
      <Person name={'Ibrahim'} lastName={'Kola'} age={25} use for props/> */}

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

    </div>
  );
}

export default App;
