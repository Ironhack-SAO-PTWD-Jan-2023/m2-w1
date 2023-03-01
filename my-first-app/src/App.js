import myImg from './assets/react-is-cool.png';

const heading = <h1>React é legal!</h1>
const student = {
  firstName: 'matheus',
  lastName: 'CHAVES'
}

const { firstName, lastName } = student;

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
// comentário!
const theId = 'home';
const divElement = <div id={theId}>div com um id</div>

function App() {
  return (
    <div className="App">
      {/* comentário! */}
      {heading}

      <h3>
        Oi, {student.firstName} {student.lastName}!
      </h3>

      <h4>
        Em maiúsculas: {firstName.toUpperCase()} {lastName.toUpperCase()}
      </h4>

      <h4>Capitalized: {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}</h4>
      
      {divElement}

      <img src={myImg} alt="react is cool" />
      <br />
      <hr />

      <label>
        User
        <input type='text' id='input-user'/>
      </label>
    </div>
  );
}


export default App;
