import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react'

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

import { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent } from './google-analytics'

// function usePageViews(){
//   let location = useLocation();

//   useEffect(() => {
//     console.log('triggered - 1')
//     ReactGA.initialize("G-L49RSBMT76");
//     ReactGA.send({ hitType: "page-view", page: location.pathname });
//   }, [location])
// }




function App() {
  let location = useLocation();

  useEffect(() => {
    InitializeGoogleAnalytics();
    TrackGoogleAnalyticsEvent('page-view-vf', "click", location.pathname)
    TrackGoogleAnalyticsEvent('page-view-wine', "click", location.pathname)
    TrackGoogleAnalyticsEvent('page-view-cantu', "click", location.pathname)

  }, [location])

  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          <Route path='/welcome' element={<Welcome />}>
            <Route
              path='new-user'
              element={<p>Welcome, new user!</p>}
            ></Route>
          </Route>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
