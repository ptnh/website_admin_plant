import './manageCart.scss';
import React, { useState, useEffect } from 'react';
import { readCartApi } from '../../api';

function ManageCart() {

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch(readCartApi)
            .then((response) => response.json())
            .then((data) => setCarts(data));
    }, []);

    return (<>
        <div className="section_layout_content">
            <div className="area_section_data">
                <div className="list_info_detail_product">
                    <table className="list_products">
                        <tr className="layout_table">
                            <th className="colum_1">Chủ giỏ hàng</th>
                            <th className="colum_2">Tên sản phẩm</th>
                            <th className="colum_3">Giá mua</th>
                            <th className="colum_4">Số lượng</th>
                           
                        </tr>
                        {carts.map((cart) => (
                            <tr className="layout_list" key={cart.id}>
                            <th>{cart.name_client}</th>
                            <th>{cart.name_product}</th>
                            <th>{cart.price_product}</th>
                            <th>{cart.quantity}</th>
                           
                        </tr> 
                        ))}
                                              
                    </table>
                </div>
            </div>
            

        </div>
    </>);
}

export default ManageCart;