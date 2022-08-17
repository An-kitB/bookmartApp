// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/landingpage/landingPage";
import { Home } from "./components/homePage/home";
import { ErroePage } from "./components/ErroePage";
import { BillingForm } from "./components/billingForm/billingForm";
import { AuthorPage } from "./components/user/AuthorPage";
import { CartPage } from "./components/user/cartPage";
import { BookPage } from "./components/user/bookPage";
import { Details } from "./components/user/Details";
import { CheckOutPAge } from "./components/CheckOutPAge";
// import { Booklist } from "./components/user/booklist";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/billing" element={<BillingForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/books/:id" element={<Details />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/Author" element={<AuthorPage />} />
          <Route path="/Checkout" element={<CheckOutPAge />} />
          <Route path="*" element={<ErroePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
