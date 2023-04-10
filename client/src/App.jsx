import './app.scss'
import Home from './pages/home/Home';
import NavBar from "./components/navbar/NavBar";
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import {
  createBrowserRouter, RouterProvider, Outlet
} from 'react-router-dom'

function App() {

  const queryClient = new QueryClient()

  // Main Layouts of App
  const Layout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Outlet />
          <Footer />
        </QueryClientProvider>

      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        }, {
          path: '/orders',
          element: <Orders />
        }, {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/messages',
          element: <Messages />
        }, {
          path: '/message/:id',
          element: <Message />
        }, {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]

    }
  ])

  return <RouterProvider router={router} />;
}

export default App
