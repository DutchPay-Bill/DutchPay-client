import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/CustomTheme";
// import PublicLayout from "./layout/PublicLayout";
import { LoginDashBoardPage, RegisterDashboardPage, NotFoundPage } from "./pages";
import LoadingAppPage from "./pages/LoadingAppPage";
import GlobalState from "./utils/globalState";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoadingAppPage />} />
            <Route path="/login" element={<LoginDashBoardPage />} />
            <Route path="/register" element={<RegisterDashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;
