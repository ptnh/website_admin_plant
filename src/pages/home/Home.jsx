import Menu from "../../component/menu/Menu";
import Header from "../../component/header/Header";
// import Body from "./component/body/Body";
import Body from "../../component/body/Body";

function Home({ isLoggedIn, username, id, onLogout }) {
    return (  
        <>
            <Header isLoggedIn={isLoggedIn} username={username} id={id} onLogout={onLogout}/>
            <Menu />
            <Body />
        </>
    );
}

export default Home;