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
import { useSelector } from "react-redux";
// import { Booklist } from "./components/user/booklist";

function App() {
  const auth = useSelector((state) => state.Auth);
  console.log("bcjkewgh", auth);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={auth ? <Home /> : <ErroePage />} />
          <Route path="/billing" element={<BillingForm />} />
          <Route path="/cart" element={auth ? <CartPage /> : <ErroePage />} />
          <Route
            path="/books/:id"
            element={auth ? <Details /> : <ErroePage />}
          />
          <Route path="/books" element={auth ? <BookPage /> : <ErroePage />} />
          <Route
            path="/Author"
            element={auth ? <AuthorPage /> : <ErroePage />}
          />
          <Route
            path="/Checkout"
            element={auth ? <CheckOutPAge /> : <ErroePage />}
          />
          <Route path="*" element={<ErroePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
