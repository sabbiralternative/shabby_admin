import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StateProvider from "./provider/StateProvider.jsx";
const queryClient = new QueryClient();
import "rsuite/dist/rsuite.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <StateProvider>
    <RouterProvider router={router}></RouterProvider>
    </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
