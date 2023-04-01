import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import BookNow from "./components/BookNow";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Admin = lazy(() => import("./pages/AdminPanel"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/ServicesPage"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));
const Register = lazy(() => import("./auth/RegisterScreen"));
const Login = lazy(() => import("./auth/LoginScreen"));
const ResetPassword = lazy(() => import("./auth/ResetPasswordScreen"));
const ForgotPassword = lazy(() => import("./auth/ForgotPasswordScreen"));
const ForumPage = lazy(() => import("./pages/ForumPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adminPanel" element={<Admin />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/passwordreset/:resetToken"
          element={<ResetPassword />}
        />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/forum" element={<ForumPage />} />
        <Route exact path="/booknow" element={<BookNow />} />
        <Route exact path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
