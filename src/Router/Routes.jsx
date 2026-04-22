import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";
import Home from "../Pages/Home";
import Hotels from "../pages/Hotels";
import Experience from "../pages/Experience";
import About from "../pages/About";
import AllRooms from "../pages/AllRooms";

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
            path:'/experience',
            element:<Experience/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/rooms',
            element:<AllRooms/>
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