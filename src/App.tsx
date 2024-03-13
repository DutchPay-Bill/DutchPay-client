import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/CustomTheme";
// import PublicLayout from "./layout/PublicLayout";
import {
  LoginDashBoardPage,
  RegisterDashboardPage,
  NotFoundPage,
  DashboardPage,
  MyAccount,
  GoogleAuthFail,
  GoogleAuthSuccess,
} from "./pages";
import LoadingAppPage from "./pages/LoadingAppPage";
import PublicLayout from "./layout/PublicLayout";
import GlobalState from "./utils/globalState";
// import PaymentUrlPage from "./pages/PaymentUrl";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoadingAppPage />} />
            <Route path="/login" element={<LoginDashBoardPage />} />
            <Route path="/register" element={<RegisterDashboardPage />} />
            <Route path="/google-auth/failed" element={<GoogleAuthFail />} />
            <Route
              path="/google-auth/success"
              element={<GoogleAuthSuccess />}
            />
            <Route
              path="/myaccount"
              element={
                <>
                  <MyAccount />
                  <PublicLayout />
                </>
              }
            />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;
