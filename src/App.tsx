import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import {
  LoginDashBoardPage,
  RegisterDashboardPage,
  NotFoundPage,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>App</div>
              <PublicLayout />
            </>
          }
        />
        <Route path="/login" element={<LoginDashBoardPage />} />
        <Route path="/register" element={<RegisterDashboardPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
