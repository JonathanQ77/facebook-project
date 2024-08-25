import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./store/AuthProvider";

const Home = lazy(() => import("./pages/Home"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Main = lazy(() => import("./layouts/Main"));

export default function App() {
    const { user, loading } = useContext(AuthContext);

    return (
        <>
            <ToastContainer theme="dark" position="bottom-right" />
            <RouterProvider
                router={createBrowserRouter([
                    {
                        path: "/",
                        element: (
                            <Suspense>
                                <Main />
                            </Suspense>
                        ),
                        children: [
                            {
                                path: "/",
                                element: (
                                    <Suspense>
                                        {user ? <Dashboard /> : <Home />}
                                    </Suspense>
                                ),
                            },
                            {
                                path: "/signup",
                                element: (
                                    <Suspense>
                                        <Signup />
                                    </Suspense>
                                ),
                            },
                        ],
                    },
                ])}
            />
        </>
    );
}
