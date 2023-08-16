import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
import ManageOrder from "../../component/manageOrder/ManageOrder";

function Order({ isLoggedIn, username, id, onLogout }) {
    return (
        <>
            <Menu />
            <Header isLoggedIn={isLoggedIn} username={username} id={id} onLogout={onLogout}/>
            <ManageOrder />
        </>
    );
}

export default Order;