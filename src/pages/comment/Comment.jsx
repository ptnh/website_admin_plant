import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
import ManageComment from "../../component/manageComment/Comment";

function Comment({ isLoggedIn, username, id, onLogout }) {
    return (
        <>
            <Menu />
            <Header isLoggedIn={isLoggedIn} username={username} id={id} onLogout={onLogout}/>
            <ManageComment />
        </>
    );
}

export default Comment;