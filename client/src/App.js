import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {DisplayTodo} from './components/DisplayTodo/DisplayTodo';
import {CreateTodo} from './components/CreateTodo/CreateTodo';


function App() {
  return (
    <div className='App'>
      {/* <h1>hello</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DisplayTodo/>}/>
          <Route path='/add-todo' element={<CreateTodo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
