import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import UserInfo from './pages/UserInfo';
import style from './App.module.scss';

const App = () => {
  return (
    <Router>
      <div className={style.container}>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/user-info' element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
