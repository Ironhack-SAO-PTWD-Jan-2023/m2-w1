import './App.css';
import { Button } from '@mui/material';
// import ExampleFuncA from './components/ExampleFuncA';
// import ExampleFuncB from './components/ExampleFuncB';
// import ExampleClassA from './components/ExampleClassA';
// import ExampleClassB from './components/ExampleClassB';

import Navbar from './components/Navbar';
import Greeting from './components/Greeting';

import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';

import Badge from './components/Badge';

import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Button variant="text">Text</Button>
      <Button variant="contained" color="warning">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Greeting firstName="Hercules" fruta="goiaba" />
      <Greeting firstName="André" />
      <Greeting firstName="João Victor" />

      <StudentList>
        <StudentCard name='João Vitor' week={8} cohort={{ city: 'SAO', course: 'WD PT'}}/>
        <StudentCard color="red" name='Bruno' week={8} cohort={{ city: 'SAO', course: 'WD PT'}}/>
      </StudentList>

      <Badge badgeText="Importante!" />

      <ReactPlayer url='https://www.youtube.com/watch?v=uJhqvzK7cWw' controls/>

      {/* <ExampleFuncA />
      <ExampleFuncB />
      <ExampleClassA />
      <ExampleClassB /> */}
    </div>
  );
}

export default App;
