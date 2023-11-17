import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDetail from './component/UserDetail/UserDetail';
import Account from './component/Account/Account';
import Home from './component/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/userdetail' element={<UserDetail/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/' element ={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
