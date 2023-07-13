import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Header from './Components/Header';
import { useEffect } from 'react';
import { auth } from './firebaseConfig';
import { useStateValues } from './StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const promise = loadStripe('pk_test_51NPkIvSEarUtHI8SiL5nLnGM3CAS2nBGHUvo0sQXjlRK7NwiCjXoqiWVKi8SvLfD0VpKGn7uX8wVQEQAIPgmQ8Pk00O67CsbvD')

function App() {
  const [{ }, dispatch] = useStateValues();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<><Header /><Home /></>} />
        <Route exact path='/checkout' element={<><Header /><Checkout /></>} />
        <Route exact path='/login' element={<><Header /><Login /></>} />
        <Route exact path='/payment' element={<>
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </>} />
      </Routes>
    </div>
  );
}

export default App;
