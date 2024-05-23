import Root from './Root';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AddProduct from './components/pages/AddProduct';
import About from './components/pages/About';
import Login from './components/pages/Login';

const router = createBrowserRouter([
    {
       path: '/',element: <Root/>, 
       errorElement: <h1>Page Didn't Found</h1>,
       children: [
        {path: '/',element: <AddProduct/>},
        {path: '/about', element: <About/>},
       ]
    },
    {path:'/login',element: <Login/>}
])

function Routes(){
    return(
        <RouterProvider router={router}/>
    );
}

export default Routes;