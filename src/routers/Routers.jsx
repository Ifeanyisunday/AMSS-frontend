import Home from "../components/landing/Home"
import Register from "../components/landing/Register"
import Login from "../components/Login"
import Income from "../components/Income"
import Businessform from "../components/Businessform"
import Asset from "../components/Assets"
import Liability from "../components/Liability"
import Collateral from "../components/Collateral"
import Equity from "../components/Equity"
import Budget from "../components/Budget"
import Maindashboard from "../components/landing/Main/Maindashboard"
import Staffform from "../components/Staffform"
import Expense from "../components/Expense"
import Features from "../components/Nav/Features"
import About from "../components/Nav/About"
import Contact from "../components/Nav/Contact"


const ROUTE = [
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/features",
        element:<Features/>
    },
    {
        path:"/expense",
        element:<Expense/>
    },
    {
        path:"/staff",
        element: <Staffform/>
    },
    {
        path:"/main",
        element:<Maindashboard/>
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
        element:<Income/>
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