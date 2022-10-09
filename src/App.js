import './App.css';
import Search from './Components/Search/Search';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
      <Home></Home>
      <Search></Search>
    </div>
  );
}

export default App;
