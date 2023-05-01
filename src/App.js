import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import PaginationPage from './pages/PaginationPage';
import CachePage from './pages/CachePage';
import AuthPage from './pages/AuthPage';
import ErrorHandlePage from './pages/ErrorHandlePage';



function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/pageination" element={<PaginationPage />} />
      <Route path="/cache" element={<CachePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/error_handle" element={<ErrorHandlePage />} />
    </Routes>
  </Router>
  );
}

export default App;
