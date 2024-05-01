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
import Content from './pages/Content.jsx';
import FAQ from './pages/FAQ.jsx';

import Navbar from './components/Navbar/Navbar.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path:"/セーフティーゾーンについて",
    element: <SafetyZone />,
    errorElement: <Error />,
  },
  {
    path:"/説明動画",
    element: <Setsumei />,
    errorElement: <Error />,
  },
  {
    path:"/音楽について",
    element: <Ongaku />,
    errorElement: <Error />,
  },
  {
    path:"/ダウンロード",
    element: <Download />,
    errorElement: <Error />,
  },
  {
    path:"/コメント集",
    element: <Content />,
    errorElement: <Error />,
  },
  {
    path:"/よくある質問",
    element: <FAQ />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
