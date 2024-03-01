import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import { LoginDashBoardPage, NotFoundPage } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><div>App</div><PublicLayout /></>} />
        <Route path="/login" element={<LoginDashBoardPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
