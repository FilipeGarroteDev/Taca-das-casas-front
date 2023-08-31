import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reset from './common/Reset'
import SigninPage from './pages/SigninPage'
import MainPage from './pages/MainPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ActivityCatalogPage from './pages/ActivityCatalogPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <>
      <Reset />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/activities" element={<ActivityCatalogPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
