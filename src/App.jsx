import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup  from './components/signup'
import Login from './components/login'
import { useSelector, useDispatch } from "react-redux";
import { initializeUser, selectUser } from "./redux/slice/userSlice";
import Dashboard from './components/Dashboard';
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);
 useEffect(() => {
    const fetchUser = async () => {
      await dispatch(initializeUser());
      setLoading(false);
    };

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <Routes>
           <Route path="dashboard" element={<Dashboard />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    </>
  )
}

export default App
