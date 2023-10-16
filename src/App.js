import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Regist from './pages/registration';
import SignIn from './pages/signIn';
import Store from './pages/store';
import Page_user from './pages/page_user';
import Bag from './pages/bag';
import Payment from './pages/payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/regist" element={<Regist/>} />
        <Route exact path="/signIn" element={<SignIn/>} />
        <Route exact path="/store" element={<Store/>} />
        <Route exact path="/page_user" element={<Page_user/>} />
        <Route exact path="/bag" element={<Bag/>} />
        <Route path="/payment/:totalPrice" element={<Payment />} />
      </Routes>
    </Router>
  );
}
export default App;