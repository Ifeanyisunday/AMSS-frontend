import Home from "../components/landing/Home"
import Register from "../components/landing/Register"
import Login from "../components/Login"
import IncomeExpense from "../components/Income"
import Dashboard from "../components/landing/Userdashboard"
import Businessform from "../components/Businessform"
import Asset from "../components/Assets"
import Liability from "../components/Liability"
import Collateral from "../components/Collateral"
import Equity from "../components/Equity"
import Budget from "../components/Budget"


const ROUTE = [
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/budget",
        element:<Budget/>
    },
    {
        path:"/equity",
        element:<Equity/>
    },
    {
        path:"/collateral",
        element:<Collateral/>
    },
    {
        path:"/registerPage",
        element:<Register/>
    },
    {
        path:"/loginPage",
        element:<Login/>
    },
    {
        path:"/income",
        element:<IncomeExpense/>
    },
    {
        path:"/userdashboard",
        element:<Dashboard/>
    },
    {
        path:"/createbusiness",
        element:<Businessform/>
    },
    {
        path:"/assets",
        element:<Asset/>
    },
    {
        path:"/liability",
        element:<Liability/>
    }
]

export default ROUTE