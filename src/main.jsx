import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './pages/Home.jsx';
import Hajimeni from './pages/Hajimeni.jsx';
import PC from './pages/PC.jsx';
import SmartPhone from './pages/SmartPhone.jsx';
import Error from './pages/Error.jsx';
import SafetyZone from './pages/SafetyZone.jsx';
import Setsumei from './pages/Setsumei.jsx';
import Ongaku from './pages/Ongaku.jsx';
import Download from './pages/Download.jsx'
import Comment from './pages/Comment.jsx';

import Navbar from './components/layout/Navbar/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

import './index.css'
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path:"/はじめに",
    element: <Hajimeni />,
    errorElement: <Error />,
  },
  {
    path:"/PC",
    element: <PC />,
    errorElement: <Error />,
  },
  {
    path:"/iPhone",
    element: <SmartPhone />,
    errorElement: <Error />,
  },
  {
    path:"/セーフティーゾーン",
    element: <SafetyZone />,
    errorElement: <Error />,
  },
  {
    path:"/説明動画",
    element: <Setsumei />,
    errorElement: <Error />,
  },
  {
    path:"/音楽",
    element: <Ongaku />,
    errorElement: <Error />,
  },
  {
    path:"/ダウンロード",
    element: <Download />,
    errorElement: <Error />,
  },
  {
    path:"/みんなのコメント集",
    element: <Comment />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    {/* <App /> */}
    <Footer />
  </React.StrictMode>,
)
