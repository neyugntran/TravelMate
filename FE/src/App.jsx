import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DefaultLayout from "./components/layouts/Layout";
import AuthLayout from "./components/layouts/Auth";
import Started from "./components/pages/auth/Started";
import Tour from "./components/pages/client/Tours/Tour";
import Hotels from "./components/pages/client/Hotels/Hotels";
import Dashboard from "./components/pages/client/Dashboard/Dashboard";
import Destinations from "./components/pages/client/Destinations/Destinations";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import LayoutAdmin from "./components/pages/admin/layouts/Layout";
import ManageUser from "./components/pages/admin/ManageUser";
import ManagerTour from "./components/pages/admin/ManagerTour";
import ManagerHotel from "./components/pages/admin/ManagerHotel";
import Home from "./components/pages/client/Home/Home";
import ManagerReview from "./components/pages/admin/ManagerReview";
import TourAll from "./components/pages/client/Tours/TourAll";
import Blog from "./components/pages/client/Blog/Blog";
import Contact from "./components/pages/client/Contact/Contact";

const ProtectedRoute = ({ children }) => {
  const isAuth = !!localStorage.getItem("user");
  return isAuth ? children : <Navigate to="/started" />;
};

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/started");
  const isAuth = !!localStorage.getItem("user");
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;

  if (!isAuth && !isAuthPage) {
    return <Navigate to="/started" />;
  }

  return (
    <UserProvider>
      {isAuthPage || !isAuth ? (
        <AuthLayout>
          <Routes>
            <Route path="/started" element={<Started />} />
            <Route path="/started/:token" element={<Started />} />
            <Route path="*" element={<Navigate to="/started" />} />
          </Routes>
        </AuthLayout>
      ) : parsedUser.role === "admin" ? (
        <LayoutAdmin>
          <Routes>
            <Route path="/" element={<Navigate to="/admin-users" />} />
            <Route
              path="/admin-users"
              element={
                <ProtectedRoute>
                  <ManageUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-tours"
              element={
                <ProtectedRoute>
                  <ManagerTour />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-hotels"
              element={
                <ProtectedRoute>
                  <ManagerHotel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-review"
              element={
                <ProtectedRoute>
                  <ManagerReview />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/admin-users" />} />
          </Routes>
        </LayoutAdmin>
      ) : (
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/destinations"
              element={
                <ProtectedRoute>
                  <Destinations />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tours"
              element={
                <ProtectedRoute>
                  <TourAll />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tours/:tourId"
              element={
                <ProtectedRoute>
                  <Tour />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hotels"
              element={
                <ProtectedRoute>
                  <Hotels />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
          </Routes>
        </DefaultLayout>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        stacked
        theme="light"
      />
    </UserProvider>
  );
};

export default App;
