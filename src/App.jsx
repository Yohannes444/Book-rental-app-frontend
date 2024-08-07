import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup  from './components/signup'
import Login from './components/login'
import { useSelector, useDispatch } from "react-redux";
import { initializeUser, selectUser } from "./redux/slice/userSlice";

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
            {user && user.jwt ? (
              user.role === "cashier" ? (
                <>
                  {/* <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard userRole={user.role} />} />
                  <Route path = "/animeInvoice" element= {<AnimeInvoice/>} /> */}

                </>
              ) : user.role === "Manager" ? (
                <>
                  {/* <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<Dashboard userRole={user.role} />} /> */}
                </>
              ) : null
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="signup" element={<Signup />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
    </>
  )
}

export default App
