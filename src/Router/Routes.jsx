import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";
import Home from "../Pages/Home";
import Hotels from "../pages/Hotels";
import Experience from "../pages/Experience";
import About from "../pages/About";

const router = createBrowserRouter([
   {
     path:'/',
     element:<MainLayout/>,
     errorElement:<Error/>,
        children:[
        {
            index:1,
            element:<Home/>
        },
        {
            path:'/rooms',
            element:<Hotels/>
        },
        {
            path:'/experience',
            element:<Experience/>
        },
        {
            path:'/about',
            element:<About/>
        }
    ]
  
   }

])
const Routes = ()=>{
    return(
        <div className="min-h-[70vh]">
            <RouterProvider router={router}/>
        </div>
        
    )
   
}
export default Routes;