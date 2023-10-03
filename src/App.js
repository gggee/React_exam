import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Regist from './pages/registration';
import SignIn from './pages/signIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/regist" element={<Regist/>} />
        <Route exact path="/signIn" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}
export default App;