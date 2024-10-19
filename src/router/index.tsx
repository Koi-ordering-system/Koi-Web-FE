import { Loading } from "@/components/common";
import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import ErrorPage from "@/components/error-page";
import Login from "@/views/auth-page/sign-in/login";
import Register from "@/views/auth-page/sign-up/register";
import FarmDetail from "@/views/main-layout/farm-page/farm-detail";
import FarmPage from "@/views/main-layout/farm-page/farm-page";
import FarmManage from "@/views/dashboard-layout/farm-page/farm-page";
import FarmManageDetail from "@/views/dashboard-layout/farm-page/farm-details";
import FarmManageEdit from "@/views/dashboard-layout/farm-page/farm-edit";
import HomePage from "@/views/main-layout/home-page/home-page";
import HistoryPage from "@/views/main-layout/history-page/history-page";
import PolicyPage from "@/views/main-layout/policy-page/policy-page";
import ServicePage from "@/views/main-layout/service-page/service-page";
import DashboardPage from "@/views/dashboard-layout/dashboard-page/dashboard-page";
import OrderPage from "@/views/dashboard-layout/order-page/order-page";
import ChatPage from "@/views/dashboard-layout/chat-page/chat-page";
import SpeciesKoiPage from "@/views/dashboard-layout/species-koi-page/species-koi-page";
import SpeciesKoiDetail from "@/views/dashboard-layout/species-koi-page/species-koi-detail";
import SpeciesKoiEdit from "@/views/dashboard-layout/species-koi-page/species-koi-edit";
import TravelPage from "@/views/dashboard-layout/travel-page/travel-page";
import TravelDetail from "@/views/dashboard-layout/travel-page/travel-detail";
import TravelEdit from "@/views/dashboard-layout/travel-page/travel-edit";
import FeedbackPage from "@/views/dashboard-layout/feedback-page/feedback-page";

/*eslint-disable*/
const RootLayout = lazy(() => import("@/components/layout/main-layout"));
const DashBoard = lazy(() => import("@/components/layout/dashboard-layout"));
/*eslint-enable*/

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "farm",
        element: <FarmPage />,
      },
      {
        path: "farm/:id",
        element: <FarmDetail />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "policy",
        element: <PolicyPage />,
      },
      {
        path: "service",
        element: <ServicePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <Suspense fallback={<Loading />}>
        <DashBoard />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "farm",
        element: <FarmManage />,
      },
      {
        path: "farm/:id",
        element: <FarmManageDetail />,
      },
      {
        path: "farm/:id/edit",
        element: <FarmManageEdit />,
      },
      {
        path: "farm/create",
        element: <FarmManageEdit />,
      },
      {
        path: "traveling",
        element: <TravelPage />,
      },
      {
        path: "traveling/:id",
        element: <TravelDetail />,
      },
      {
        path: "traveling/:id/edit",
        element: <TravelEdit />,
      },
      {
        path: "traveling/create",
        element: <TravelEdit />,
      },
      {
        path: "feedback",
        element: <FeedbackPage />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "chatting",
        element: <ChatPage />,
      },
      {
        path: "species-koi",
        element: <SpeciesKoiPage />,
      },
      {
        path: "species-koi/:id",
        element: <SpeciesKoiDetail />,
      },
      {
        path: "species-koi/:id/edit",
        element: <SpeciesKoiEdit />,
      },
      {
        path: "species-koi/create",
        element: <SpeciesKoiEdit />,
      },
    ],
  },
  { path: "/sign-up", element: <Register /> },
  { path: "/sign-in", element: <Login /> },
]);

export default router;
