import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Counter from './pages/counter/Counter';
import Modal from './pages/modal/Modal';
import UsersList from './pages/usersList/UsersList';
import CurrencyConvertor from './pages/currencyConvertor/CurrencyConvertor'
import Photos from './pages/photos/Photos';

import Quiz from './pages/quiz/Quiz';
import Header from './components/Header';
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/currency_convertor" element={<CurrencyConvertor />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
