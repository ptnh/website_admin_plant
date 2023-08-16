import './manageOrder.scss';
import React, { useState, useEffect } from 'react';
import { readAccountApi, readOrderApi, updateOrderApi } from '../../api';
function ManageOrder() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(readOrderApi)
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, []);
    const uniqueOrders = [];

    orders.forEach((order) => {
        const existingOrder = uniqueOrders.find((uniqueOrder) => uniqueOrder.id_order === order.id_order);
        if (!existingOrder) {
            uniqueOrders.push(order);
        }
    });
    
    const [idFlag, setIdFlag] = useState('DH42411');
    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
        fetch(`${readOrderApi}?id_order=${idFlag}`)
            .then((response) => response.json())
            .then((data) => setListProducts(data));
    }, [idFlag]);
    
    //lấy thông tin khách
    const [infoClients, setInfoClient] = useState([]);
    const [accountFlag, setAccountFlag] = useState(1);
    useEffect(() => {
        fetch(`${readAccountApi}?id_account=${accountFlag}`)
            .then((response) => response.json())
            .then((data) => setInfoClient(data));
    }, [accountFlag]);

    const[idOrderFlag, setIdOrderFlag] = useState('')
    const[statusFlag, setStatusFlag] = useState('')
    const handleRowClickOrder = (order) => {
        setIdFlag(order.id_order);
        setAccountFlag(order.id_owner);
        setIdOrderFlag(order.id_order);
        setStatusFlag(order.status_order);
    }

    const handleUpdateStatus = () =>{
        const formData2 = new FormData();
        formData2.append('id_order', idFlag)
        formData2.append('status_order', statusFlag);
    

        fetch(updateOrderApi, {
            method: 'POST',
            body: formData2,
        })
            .then((response) => {
                if (response.ok) {
                    
                } else {
                    throw new Error('Có lỗi xảy ra khi xóa sản phẩm.');
                }
            })
            .catch((error) => console.error('Error deleting product:', error));
    }

    return ( <>
        <div className="section_layout_content_order">
            <div className="area_section_data_order">
                <div style={{display:'flex'}}>
                    <div className="list_info_detail_product_order">
                        <table className="list_products_order">
                            <tr className="layout_table_order">
                                <th className="colum_1_order">Mã đơn hàng</th>                            
                                <th className="colum_2_order">Ngày mua</th>
                                <th className="colum_3_order">Tổng tiền</th>
                                <th className="colum_4_order">Trạng thái</th>
                            </tr>
                            
                            {uniqueOrders.map((order) => (
                                <tr className="layout_list_order" key={order.id} onClick={() => handleRowClickOrder(order)}>
                                    <th>{order.id_order}</th>
                                    <th>{order.day_bought}</th>
                                    <th>{order.total_money}</th>
                                    <th>{order.status_order}</th>
                                </tr> 
                            ))}                                           
                        </table>
                    </div>

                    <div className="list_info_detail_product_client">
                        <table className="list_products_client">
                            <tr className="layout_table_client">
                                <th className="colum_1_client">Tên sản phẩm</th>                            
                                <th className="colum_2_client">số lượng</th>
                                <th className="colum_3_client">Giá</th>
                                <th className="colum_4_client">Thành tiền</th>
                            </tr>
                            {listProducts.map((listProduct) => (
                                <tr className="layout_list_order" key={listProduct.id}>
                                    <th>{listProduct.name_product}</th>
                                    <th>{listProduct.quantity}</th>
                                    <th>{listProduct.price_bought}</th>
                                    <th>{listProduct.quantity * listProduct.price_bought}</th>
                                </tr> 
                            ))}                                            
                        </table>                    
                    </div>
                </div>
                
                
                <div style={{display:'flex'}}>       
                    <div className="list_info_detail_order">
                        {infoClients.map((infoClient) => (
                            <form>
                                <div class="form-group">
                                    <label class="form-label" for="name">Tên:</label>
                                    <input class="form-input" type="text" id="name" name="name" 
                                    placeholder={infoClient.name_client} 
                                    value={infoClient.name_client} 
                                    required></input>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="address">Địa chỉ:</label>
                                    <input class="form-input" type="text" id="address" name="address" 
                                    placeholder={infoClient.address_client} 
                                    value={infoClient.address_client} 
                                    required></input>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="phone">Số điện thoại:</label>
                                    <input class="form-input" type="tel" id="phone" name="phone" 
                                    placeholder={infoClient.phone_client} 
                                    value={infoClient.phone_client} 
                                    required></input>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="email">Email:</label>
                                    <input class="form-input" type="email" id="email" name="email" 
                                    placeholder={infoClient.email_client} 
                                    value={infoClient.email_client} 
                                    required></input>
                                </div>
                            </form>
                        ))}                      
                    </div>
                    <div className="area_edit_info_order">
                        <div className="edit_list_order">
                            <form className="form_edit" action="">
                
                                <div>
                                    <div className="form-group">
                                        <label for="id_order">Mã đơn hàng:</label>
                                        <input type="text" id="id_order" name="id_order" 
                                            placeholder={idOrderFlag}
                                            value={idOrderFlag}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="status_order">Nhập trạng thái:</label>
                                        <input type="text" id="status_order" name="status_order" 
                                            placeholder={statusFlag}
                                            onChange={(e) =>  setStatusFlag(e.target.value)}
                                            required
                                        ></input>
                                    </div> 
                                    
                                    <input type="submit" className="btn-update" value="Cập nhật trạng thái" onClick={handleUpdateStatus}></input>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default ManageOrder;