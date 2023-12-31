import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Reset from './common/Reset'
import SigninPage from './pages/SigninPage'
import MainPage from './pages/MainPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ActivityCatalogPage from './pages/ActivityCatalogPage'
import RegisterPage from './pages/RegisterPage'
import HistoryPage from './pages/HistoryPage'
import RankingPage from './pages/RankingPage'
import AdminMainPage from './pages/Admin/AdminMainPage'
import AdminRegisterPage from './pages/Admin/AdminRegisterPage'
import ValidateActivityPage from './pages/Admin/ValidateActivityPage'

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
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/admin" element={<AdminMainPage />} />
            <Route path="/admin/registerActivity" element={<AdminRegisterPage />} />
            <Route path="/admin/validateActivity" element={<ValidateActivityPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
