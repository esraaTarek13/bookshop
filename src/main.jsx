import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Modal from "react-modal";
import 'swiper/css';
import 'swiper/css/navigation';


const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
);
Modal.setAppElement("#root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
