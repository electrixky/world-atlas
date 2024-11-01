import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Country} from "./pages/Country.jsx";
import {Contact} from "./pages/Contact.jsx";
import {AppLayout, CountryDetails} from "./components/Layout/AppLayout.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "country",
                element: <Country/>
            },
            {
                path: "country/:id",
                element: <CountryDetails/>
            },
            {
                path: "contact",
                element: <Contact/>
            }
        ]
    },

])

const App = () => {
    return <RouterProvider router={router}></RouterProvider>
}

export default App;