import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import GameDetails from "../../src/pages/GameDetails/GameDetails";
import OurCasinoPage from "../../src/pages/OurCasinoPage/OurCasinoPage";
import VirtualCasino from "../../src/pages/VirtualCasino/VirtualCasino";
import AccountList from "../../src/pages/AccountList/AccountList";
import AccountListUserType from "../pages/AccountList/AccountListUserType";
import CreateAccount from "../../src/pages/CreateAccount/CreateAccount";
import AccountStatement from "../../src/pages/Reports/AccountStatement/AccountStatement";
import PartyWinLoss from "../../src/pages/Reports/PartyWinLoss/PartyWinLoss";
import CurrentBets from "../../src/pages/Reports/CurrentBets/CurrentBets";
import GeneralLock from "../../src/pages/Reports/GeneralLock/GeneralLock";
import OurCasinoResult from "../../src/pages/Reports/OurCasinoResult/OurCasinoResult";
import LiveCasinoResult from "../../src/pages/Reports/LiveCasinoResult/LiveCasinoResult";
import UserAuthentication from "../../src/pages/Reports/UserAuthentication/UserAuthentication";
import TurnOver from "../../src/pages/Reports/TurnOver/TurnOver";
import UserHistory from "../../src/pages/Reports/UserHistory/UserHistory";
import ChangeLoginPassword from "../components/ChangeLoginPassword/ChangeLoginPassword";
import ChangeLoginSuccess from "../components/ChangeLoginSuccess/ChangeLoginSuccess";
import Bank from "../../src/pages/Bank/Bank";
import MultiLoginAccount from "../../src/pages/MultiLoginAccount/MultiLoginAccount";
import SecureAuth from "../../src/pages/SecureAuth/SecureAuth";
import MarketAnalysis from "../../src/pages/MarketAnalysis/MarketAnalysis";
import VerificationLogin from "../components/VerificationLogin/VerificationLogin";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/admin/user",
          element: <AccountList />,
        },
        {
          path: "/user/:userType",
          element: <AccountListUserType />,
        },
        {
          path: "/createAccount",
          element: <CreateAccount />,
        },
        {
          path: "/ourCasino",
          element: <OurCasinoPage />,
        },
        {
          path: "/virtualCasino",
          element: <VirtualCasino />,
        },
        {
          path: "/game-details/:eventTypeId/:eventId",
          element: <GameDetails />,
        },
        {
          path: "/accountStatement",
          element: <AccountStatement />,
        },
        {
          path: "/partyWinLoss",
          element: <PartyWinLoss />,
        },
        {
          path: "/currentBets",
          element: <CurrentBets />,
        },
        {
          path: "/generalLock",
          element: <GeneralLock />,
        },
        {
          path: "/ourCasinoResult",
          element: <OurCasinoResult />,
        },
        {
          path: "/liveCasinoResult",
          element: <LiveCasinoResult />,
        },
        {
          path: "/userAuthentication",
          element: <UserAuthentication />,
        },
        {
          path: "/turnOver",
          element: <TurnOver />,
        },
        {
          path: "/userHistory",
          element: <UserHistory />,
        },
        {
          path: "/bank",
          element: <Bank />,
        },
        {
          path: "/multiLoginAccount",
          element: <MultiLoginAccount />,
        },
        {
          path: "/secureAuth",
          element: <SecureAuth />,
        },
        {
          path: "/market-analysis",
          element: <MarketAnalysis />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/verification-login",
      element: <VerificationLogin />,
    },
    {
      path: "/change-password-login",
      element: <ChangeLoginPassword />,
    },
    {
      path: "/change-password-success",
      element: <ChangeLoginSuccess />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);

export default router;
