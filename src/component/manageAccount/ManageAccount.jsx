import './manageAccount.scss';
import React, { useState, useEffect } from 'react';
import { readAccountApi } from '../../api';

function ManageAccount() {

    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        fetch(readAccountApi)
            .then((response) => response.json())
            .then((data) => setAccounts(data));
    }, []);

    return (
        <div className="section_layout_content">
            <div className="area_section_data">
                <div className="list_info_detail_product_account">
                    <table className="list_products">
                        <tr className="layout_table">
                            <th className="colum_1">Tên khách hàng</th>
                            <th className="colum_2">Địa chỉ khách hàng</th>
                            <th className="colum_3">Số điện thoại</th>
                            <th className="colum_4">Email</th>
                            <th className="colum_5">Tài khoản đăng nhập</th>
                            <th className="colum_6">Mật khẩu</th>
                            <th className="colum_6">Quyền hạn</th>
                          
                        </tr>
                        {accounts.map((account) => (
                            <tr className="layout_list" key={account.id}>
                                <th>{account.name_client}</th>
                                <th>{account.address_client}</th>
                                <th>{account.phone_client}</th>
                                <th>{account.email_client}</th>
                                <th>{account.username_account}</th>
                                <th>{account.password_account}</th>
                                <th>{account.permission}</th>
                            </tr> 
                        ))}
                                              
                    </table>
                </div>
            </div>
            

        </div>

    );
}

export default ManageAccount;