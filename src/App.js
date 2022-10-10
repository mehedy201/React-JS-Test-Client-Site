import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Pages/AddStudent/AddStudent';
import EditStudent from './Pages/EditStudent/EditStudent';
import Home from './Pages/Home/Home';
import ViewStudent from './Pages/ViewStudent/ViewStudent';

function App() {
  return (
    <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/editStudent' element={<EditStudent/>}></Route>
        <Route path='/viewStudent/:id' element={<ViewStudent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
