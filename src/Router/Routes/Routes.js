import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import EditReview from "../../Pages/Review/EditReview/EditReview";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/Review/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from '../../Pages/Services/Services/Services';
import Login from "../../Pages/User/Login/Login";
import SignUp from "../../Pages/User/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://dent-care-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: 'editReview/:id',
                element: <EditReview></EditReview>,
                loader: ({params})=> fetch(`https://dent-care-server.vercel.app/review_id/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default router;