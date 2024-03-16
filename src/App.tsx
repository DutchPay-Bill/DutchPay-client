import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./themes/CustomTheme";
import {
  LoginDashBoardPage,
  RegisterDashboardPage,
  NotFoundPage,
  DashboardPage,
  MyAccount,
  GoogleAuthFail,
  GoogleAuthSuccess,
  NewBillDashboard,
  Ewallet,
} from "./pages";
import LoadingAppPage from "./pages/LoadingAppPage";
import GlobalState from "./utils/globalState";
import BillHistoryPage from "./pages/BillHistoryPage";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoadingAppPage />} />
            <Route path="/login" element={<LoginDashBoardPage />} />
            <Route path="/register" element={<RegisterDashboardPage />} />
            <Route path="/my-account" element={<MyAccount />} />
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
            <Route path="/new-bill" element={<NewBillDashboard />} />
            <Route path="/history" element={<BillHistoryPage />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/e-wallet" element={<Ewallet />} />
            <Route path="/google-auth/failed" element={<GoogleAuthFail />} />
            <Route
              path="/google-auth/success"
              element={<GoogleAuthSuccess />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;
