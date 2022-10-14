import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomTemplePage from "./Pages/CustomTemplePage";
import MainPage from "./Pages/MainPage";
import NotFound from "./Pages/NotFound";
import PersonalViewPage from "./Pages/PersonalViewPage";
import ThankYou from "./Pages/ThankYou";
import Terms from "./Pages/Terms";

import AdminLogin from "./Pages/Login";
import AdminPage from "./App";
import DivinePage from "./Pages/Decor";
import DecorPage from "./Pages/Decor";

const SystemRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/temples" element={<CustomTemplePage />} />
        <Route path="/decor" element={<DecorPage />} />
        <Route path="/viewitem/:templeid" element={<PersonalViewPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />

        {/* Admin Routes */}
        <Route path="/admin/inquire" element={<AdminPage />} />
        <Route path="/admin/product" element={<AdminPage />} />
        <Route
          path="/admin/product-details/:templeid"
          element={<AdminPage />}
        />
        <Route path="/admin/product-edit/:templeid" element={<AdminPage />} />
        <Route path="/admin/add-product" element={<AdminPage />} />
        <Route path="/admin/logout" element={<AdminPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default SystemRoute;
