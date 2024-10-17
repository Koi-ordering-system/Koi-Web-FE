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
import KoiDetail from "@/views/main-layout/koi-page/koi-detail";
import KoiPage from "@/views/main-layout/koi-page/koi-page";
import KoiManage from "@/views/dashboard-layout/koi-page/koi-page";
import KoiManageDetail from "@/views/dashboard-layout/koi-page/koi-detail";
import KoiManageEdit from "@/views/dashboard-layout/koi-page/koi-edit";
import PolicyPage from "@/views/main-layout/policy-page/policy-page";
import ServicePage from "@/views/main-layout/service-page/service-page";
import DashboardPage from "@/views/dashboard-layout/dashboard-page/dashboard-page";
import OrderPage from "@/views/dashboard-layout/order-page/order-page";
import ChatPage from "@/views/dashboard-layout/chat-page/chat-page";
import ShoppingCart from "@/views/main-layout/shopping-cart-page/shopping-cart-page";
import SpeciesPage from "@/views/dashboard-layout/species-page/species-page";
import SpeciesDetail from "@/views/dashboard-layout/species-page/species-detail";
<<<<<<< HEAD
import Checkout from "@/views/main-layout/checkout-page/checkout-page";
=======
import SpeciesEdit from "@/views/dashboard-layout/species-page/species-edit";
>>>>>>> fd69139ef860e53ff2480a985c5003b6a22b6056

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
        path: "koi",
        element: <KoiPage />,
      },
      {
        path: "koi/:id",
        element: <KoiDetail />,
      },
      {
        path: "policy",
        element: <PolicyPage />,
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "checkout",
        element: <Checkout/>
      }
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
        path: "koi",
        element: <KoiManage />,
      },
      {
        path: "koi/:id",
        element: <KoiManageDetail />,
      },
      {
        path: "koi/:id/edit",
        element: <KoiManageEdit />,
      },
      {
        path: "koi/create",
        element: <FarmManageEdit />,
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
        path: "species",
        element: <SpeciesPage />,
      },
      {
        path: "species/:id",
        element: <SpeciesDetail />,
      },
      {
        path: "species/:id/edit",
        element: <SpeciesEdit />,
      },
      {
        path: "species/create",
        element: <SpeciesEdit />,
      },
    ],
  },
  { path: "/sign-up", element: <Register /> },
  { path: "/sign-in", element: <Login /> },
]);

export default router;
