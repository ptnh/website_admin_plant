import './menu.scss';

function Menu(){
    return(
        <>
            <div className="section_menu_admin">
                <div className="represent_menu">
                {/* <img className="logo_website" src="./log" alt=""> */}
              
                    <img className="logo_website" src="logo.jpg" alt=""></img>
                </div>
                <hr width="100%"></hr>
                <div className="options_menu">
                    <div className="status_manage">
                        <h3 className="infomation_sum"><a href="/">Thông tin trạng thái quản lý</a></h3>
                    </div>
                    <hr style={{margin: '0 auto', width:'80%'}} ></hr>
                    <div className="manage_products">
                        <h3 className="title_product">Sản phẩm</h3>
                        <hr style={{margin: '0 auto', width:'60%'}} ></hr>
                        <div className="manage_product_detail manage_products">
                            <h3><a href="/product">Quản lý sản phẩm</a></h3>
                        </div>
                        <div className="manage_product_detail manage_carts">
                            <h3><a href="/cart">Quản lý giỏ hàng</a></h3>
                        </div>
                        <div className="manage_product_detail manage_carts">
                            <h3><a href="/order">Quản lý đơn hàng</a></h3>
                        </div>
                    </div>
                    <div className="manage_clients">
                        <h3 className="title_clients">Khách hàng</h3>
                        <hr style={{margin: '0 auto', width:'60%'}} ></hr>
                        <div className="manage_client-detail manage_list_client">
                            <h3><a href="/account">Quản lý thông tin khách hàng</a></h3>
                        </div>
                        <div className="manage_client-detail manage_list_client">
                            <h3><a href="/comment">Quản lý bình luận sản phẩm</a></h3>
                        </div>                
                    </div>
            
                </div>
            </div>
        </>
    )
}

export default Menu;