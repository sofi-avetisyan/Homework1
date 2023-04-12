import { useRoutes } from "react-router-dom";
import Categories from "../Images";
import Home from "../Home";

const ROUTES = [
    {
        path:"/categories/:id",
        element:<Categories/>

    },
    {
        path:"/",
        element: <Home/>
    }
]

export default function Router () {
    return useRoutes(ROUTES)
}