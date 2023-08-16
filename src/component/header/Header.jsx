import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './header.scss';

function Header({ isLoggedIn, username, id, onLogout}) {
    const [overlayActive, setOverlayActive] = useState(false); 
    const history = useNavigate();
    // xử lý đăng xuất
    const handleLogout = (e) => {
        e.preventDefault();
        onLogout();
        history('/login');
    };

    // useEffect(() => {
    //     // Kiểm tra nếu người dùng chưa đăng nhập và hiển thị thông báo khi component được render lần đầu trên trang sản phẩm
    //     if (!isLoggedIn && window.location.pathname !== '/login') {
    //         alert('Vui lòng đăng nhập để tiếp tục.');
    //         history('/login');
    //     }
    // }, [isLoggedIn, window.location.pathname]);

    return (
        <div className="container">
            <div className={`overlay ${overlayActive ? 'active' : ''}`}></div>
            <div className="section_right_manage">
                <div className="section_account_admin">
                    <h3>Trang thông tin quản lí website bán cây cảnh</h3>

                    <div className="section_user">
                        <img className="img_account" src='https://i.imgur.com/mjPVGXV.png' alt="Trang quản lí"></img>
                        {isLoggedIn ? (
                            <>
                                {/* ... */}
                                <p className="hi_user">Xin chào! <span>{username}</span></p>
                                <button className="btn-login" onClick={handleLogout}>Đăng xuất</button>
                            </>
                        ) : (
                            <div style={{ display: 'flex'}}>
                                <button className="btn-login">
                                    {/* Chuyển hướng về trang đăng nhập */}
                                    <a href="/login">Đăng nhập</a>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
