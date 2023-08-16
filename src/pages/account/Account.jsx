import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
import ManageAccount from "../../component/manageAccount/ManageAccount";

function Account({ isLoggedIn, username, id, onLogout }) {
    return (
        <>
            <Menu />
            <Header isLoggedIn={isLoggedIn} username={username} id={id} onLogout={onLogout}/>
            <ManageAccount/>
        </>
    );
}

export default Account;