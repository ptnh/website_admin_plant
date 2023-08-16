import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
import ManageProduct from "../../component/manageproduct/ManageProduct";

function Product({ isLoggedIn, username, id, onLogout }) {
    return (
        <>
            <Menu />
            <Header isLoggedIn={isLoggedIn} username={username} id={id} onLogout={onLogout}/>
            <ManageProduct />
        </>
    );
}

export default Product;