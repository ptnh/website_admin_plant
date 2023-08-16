import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Account from "./pages/account/Account";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Comment from "./pages/comment/Comment";

import { useState, useEffect } from 'react';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [idFlag, setIdFlag] = useState('');

    const handleLogin = (username, id) => {
        setIsLoggedIn(true);
        setUsername(username);
        setIdFlag(id);

        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('idFlag', id);
        localStorage.setItem('username', username);
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername('');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
  };

    useEffect(() => {
        console.log(idFlag);
    }, [idFlag]);

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        const storedUsername = localStorage.getItem('username');
        const storedIdFlag = localStorage.getItem('idFlag');
        if (storedIsLoggedIn && storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
            setIdFlag(storedIdFlag);
        }
    }, []);

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={[<Home isLoggedIn={isLoggedIn} username={username} id={idFlag} onLogout={handleLogout} key="home" />]}/>
          <Route path="/product" element={[<Product isLoggedIn={isLoggedIn} username={username} id={idFlag} onLogout={handleLogout}  key="product" />]}/>
          <Route path="/cart" element={[<Cart isLoggedIn={isLoggedIn} username={username} id={idFlag} onLogout={handleLogout}  key="cart" />]}/>
          <Route path="/order" element={[<Order isLoggedIn={isLoggedIn} username={username} id={idFlag} onLogout={handleLogout}  key="order" />]}/>
          <Route path="/comment" element={[<Comment isLoggedIn={isLoggedIn} username={username} id={idFlag} onLogout={handleLogout}  key="comment" />]}/>
          <Route path="/account" element={[<Account isLoggedIn={isLoggedIn} username={username} id={idFlag} onLogout={handleLogout}  key="account" />]}/>
          <Route path="/login" element={[<Login onLogin={handleLogin} key="login" />]}/>
          <Route path="/register" element={[<Register key="register" />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
