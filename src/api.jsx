//api doanh thu
export const orderApiSumMoneyFull = 'http://localhost:8080/webplant_api/orders_api/read.php?total_money=tong';
export const orderApiSumMoneyQuy = 'http://localhost:8080/webplant_api/orders_api/read.php?total_money=quy';
export const orderApiSumMoneyThang = 'http://localhost:8080/webplant_api/orders_api/read.php?total_money=thang';
export const orderApiSumMoneyTuan = 'http://localhost:8080/webplant_api/orders_api/read.php?total_money=tuan';
//api trạng thái đơn hàng
export const statusApiSumFull = 'http://localhost:8080/webplant_api/orders_api/read.php?status_order=tong';
export const statusApiSumWait = 'http://localhost:8080/webplant_api/orders_api/read.php?status_order=Chờ duyệt';
export const statusApiSumDriving = 'http://localhost:8080/webplant_api/orders_api/read.php?status_order=Đang chuyển';
export const statusApiSumAccepted = 'http://localhost:8080/webplant_api/orders_api/read.php?status_order=Đã giao';
//api sản phẩm bán chạy
export const productBoughtApiSumFull = 'http://localhost:8080/webplant_api/orders_api/read.php?quantity=tong';
export const productBoughtApiSumI = 'http://localhost:8080/webplant_api/orders_api/read.php?quantity=rank1';
export const productBoughtApiSumII = 'http://localhost:8080/webplant_api/orders_api/read.php?quantity=rank2';
export const productBoughtApiSumIII = 'http://localhost:8080/webplant_api/orders_api/read.php?quantity=rank3';
//api bình luận sản phẩm
export const commentApiSumFull = 'http://localhost:8080/webplant_api/comment_api/read.php?id_comment=tong';
export const commentApiSumI = 'http://localhost:8080/webplant_api/comment_api/read.php?id_comment=rank1';
export const commentApiSumII = 'http://localhost:8080/webplant_api/comment_api/read.php?id_comment=rank2';
export const commentApiSumIII = 'http://localhost:8080/webplant_api/comment_api/read.php?id_comment=rank3';
//api quản lý sản phẩm
export const readProductApi = 'http://localhost:8080/webplant_api/plants_api/read.php';
export const addProductApi = 'http://localhost:8080/webplant_api/plants_api/create.php';
export const updateProductApi = 'http://localhost:8080/webplant_api/plants_api/update.php';
export const deleteProductApi = 'http://localhost:8080/webplant_api/plants_api/delete.php';
//api form thêm sản phẩm
export const formProductApi = 'http://localhost:8080/webplant_api/index.php';
//api quản lý giỏ hàng
export const readCartApi = 'http://localhost:8080/webplant_api/cart_api/read.php?id_owner=cart';
//api quản lý đơn hàng
export const readOrderApi = 'http://localhost:8080/webplant_api/orders_api/read.php';
export const updateOrderApi = 'http://localhost:8080/webplant_api/orders_api/update.php';
//api quản lý account
export const readAccountApi = 'http://localhost:8080/webplant_api/accounts_api/read.php';
export const createAccountApi = 'http://localhost:8080/webplant_api/accounts_api/create.php';
//api quản lý đánh giá, bình luận
export const readCommentApi = 'http://localhost:8080/webplant_api/comment_api/read.php';
export const deleteCommentApi = 'http://localhost:8080/webplant_api/comment_api/delete.php';



