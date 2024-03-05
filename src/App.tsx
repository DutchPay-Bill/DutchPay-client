import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/CustomTheme";
import PublicLayout from "./layout/PublicLayout";
import { LoginDashBoardPage, RegisterDashboardPage, NotFoundPage } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
