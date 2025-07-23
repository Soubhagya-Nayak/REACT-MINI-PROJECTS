import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { About } from './components/About/About.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { User } from './components/User/User.jsx';
import { GitHub, GithubInfoLoader } from './components/GitHub/GitHub.jsx';

// 1st Method for Routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


// 2nd Method for Routing (Recomanded)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userId' element={<User />}/>
      <Route path='github' element={<GitHub />} loader={GithubInfoLoader}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
