import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Nav/Hero";
// import Register from "./components/landing/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTE from "./routers/Routers";
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IncomeExpense from "./components/Income";

// import InvoiceManager from "./components/Invoice";


function App() {
  const router = createBrowserRouter([
    ...ROUTE
  ])

  return (
    <div>

      <RouterProvider router={router}>
        
      </RouterProvider>
      
    </div>
  )
}

export default App;
