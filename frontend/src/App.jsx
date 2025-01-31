
import './App.css';
import './index.css'
import Register from './pages/Register';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
   <Routes>
   <Route exact path="" element={<Register />} />
   </Routes>
   </Router>
  );
}

export default App;
