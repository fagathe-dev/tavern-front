import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { NotFoundPage } from "../pages/admin/NotFoundPage";
import { HomePage } from "../pages/admin/HomePage";
import AdminLayout from "../components/layout/AdminLayout";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
