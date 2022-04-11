import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllPage from "./pages/AllPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import OrderPage from "./pages/OrderPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<AllPage />} exact />

          <Route path="/men" element={<MenPage />} />

          <Route path="/women" element={<WomenPage />} />

          <Route path="/order" element={<OrderPage />} />

          <Route path="/confirmed" element={<ConfirmationPage />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
