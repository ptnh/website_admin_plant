import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
import ManageCart from "../../component/managecart/ManageCart";

function Cart({ isLoggedIn, username, id, onLogout }) {
    return (
        <>
            <Menu />
            <Header isLoggedIn={isLoggedIn} username={username} id={id} onLogout={onLogout}/>
            <ManageCart/>
        </>
    );
}

export default Cart;