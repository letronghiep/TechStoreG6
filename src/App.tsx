import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsRoute from "./routes/products.routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/products/*" element={<ProductsRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
