
import './App.css';
import imgprofile from './assets/images/gem.jpg'

const Person = (userName) => {

  return(
    <>
      <img src={imgprofile} alt='imgprofile' width="150px" />
      <h1>Name: {userName.name}</h1>
      <h2>Last Name: {userName.lastName}</h2>
      <h3>Age: {userName.age}</h3>
      <hr/>
    </>
  )

}

function App() {
  return (
    <div className="App">
      <Person name={'Gem'} lastName={'Creation'} age={23} />
      <Person name={'Ibrahim'} lastName={'Kola'} age={25} />
    </div>
  );
}

export default App;
