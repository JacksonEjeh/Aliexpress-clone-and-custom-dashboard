import AddProductPage from "./adiminDashboard/AddProductPage";
import LandingPage from "./adiminDashboard/LandingPage";
import NewCategory from "./adiminDashboard/NewCategory";
import Products from "./adiminDashboard/Products";
import Profile from "./adiminDashboard/Profile";
import Registration from "./adiminDashboard/Registration";
import Sidebar from "./adiminDashboard/Sidebar";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NetError from "./dashboardComponents/NetError";
import DetailPage from "./adiminDashboard/DetailPage";
import CategoryProducts from "./adiminDashboard/CategoryProducts";
import RegLogin from "./pages/RegLogin";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/DetailPage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import UserProfile from "./pages/UserProfile";


const Layout = ()=>{
  const product_id = localStorage.getItem('product_id')
  const product_id2 = localStorage.getItem('productIdForDashboard')
  const location = useLocation()

  const hideNavAndFooterOnPaths = ["/", "/dashboard", "/profile", "/newCategory", "/newProduct", "/products", `/Detail/${product_id2}`, "/categoryProduct/:id"]
  const shouldHideNavAndFooter = hideNavAndFooterOnPaths.includes(location.pathname);

  const dashHideSidebarOnPaths = ["/ecommerce-home", "/", "/RegLogin", "/shopPage", `/details/${product_id}`, "/cartPage", "/profilePage" ]
  const dashShouldHideSidebar = dashHideSidebarOnPaths.includes(location.pathname);
  return(
    <div>
      {!shouldHideNavAndFooter && <Navbar />}
      {!dashShouldHideSidebar && <Sidebar />}
      <main>
        <Routes>
          <Route path="/" element={<Registration />}/>
          <Route  path="/dashboard" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newCategory" element={<NewCategory />} />
          <Route path="/newProduct" element={<AddProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Detail/:id" element={<DetailPage />} />
          <Route path="/categoryProduct/:id" element={<CategoryProducts />} />
        </Routes>
        <Routes>
          <Route path="/RegLogin" element={<RegLogin />} />
          <Route path="/ecommerce-home" element={<Home />} />
          <Route path="/shopPage" element={<ShopPage />} />
          <Route path="/details/:id" element={<ProductDetailPage />} />
          <Route path="/cartPage" element={<Cart />} />
          <Route path="/profilePage" element={<UserProfile />} />
        </Routes>
      </main>
      {!shouldHideNavAndFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <div className=''>
      <Router>
        <NetError />
        <Layout />
      </Router>
    </div>
  );
}


export default App;