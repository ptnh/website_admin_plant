import './manageProduct.scss' 

import React, { useState, useEffect } from 'react';
import { addProductApi, deleteProductApi, formProductApi, readProductApi, updateProductApi } from '../../api';

function ManageProduct() {
    const [nameProduct, setNameProduct] = useState('');
    const [discountProduct, setDiscountProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [mainPic, setMainPic] = useState('');
    const [pic1, setPic1] = useState('');
    const [pic2, setPic2] = useState('');
    const [pic3, setPic3] = useState('');
    const [typeProduct, setTypeProduct] = useState('');

    const handleInsertProduct = () => {
        const formData2 = new FormData();
        formData2.append('name', nameProduct);
        formData2.append('discount', discountProduct);
        formData2.append('price_new', priceProduct);
        formData2.append('picture_main', mainPic);
        formData2.append('picture_other_1', pic1);
        formData2.append('picture_other_2', pic2);
        formData2.append('picture_other_3', pic3);
        formData2.append('type_plant', typeProduct);
        alert(mainPic);
        fetch(addProductApi, {
            method: 'POST',
            body: formData2,
        })
            .then((response) => {
                if (response.ok) {
                    
                } else {
                    throw new Error('Có lỗi xảy ra khi thêm sản phẩm.');
                }
            })
            .catch((error) => console.error('Error add product:', error));
    }

    const handleUpdateProduct = () => {
        const formData2 = new FormData();
        formData2.append('name', nameProduct);
        formData2.append('discount', discountProduct);
        formData2.append('price_new', priceProduct);
        formData2.append('picture_main', mainPic);
        formData2.append('picture_other_1', pic1);
        formData2.append('picture_other_2', pic2);
        formData2.append('picture_other_3', pic3);
        formData2.append('type_plant', typeProduct);

        fetch(updateProductApi, {
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

    const handleDeleteProduct = () => {
        const formData2 = new FormData();
        formData2.append('name', nameProduct);
        formData2.append('picture_main', mainPic);

        fetch(deleteProductApi, {
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

    const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch(readProductApi)
            .then((response) => response.json())
            .then((data) => setPlants(data));
    }, []);

    const [selectedProduct, setSelectedProduct] = useState({
        name: '',
        price_new: '',
        discount: '',
        picture_main: '',
        picture_other_1: '',
        picture_other_2: '',
        picture_other_3: '',
        type_plant: '',
    });
    
    const handleRowClick = (product) => {
        setSelectedProduct({
            name: product.name,
            price_new: product.price_new,
            discount: product.discount,
            picture_main: product.picture_main,
            picture_other_1: product.picture_other_1,
            picture_other_2: product.picture_other_2,
            picture_other_3: product.picture_other_3,
            type_plant: product.type_plant,
        });
        setNameProduct(product.name);
        setDiscountProduct(product.discount);
        setPriceProduct(product.price_new);
        setMainPic(product.picture_main);
        setPic1(product.picture_other_1);
        setPic2(product.picture_other_2);
        setPic3(product.picture_other_3);
        setTypeProduct(product.type_plant);
    };

    //gọi form nhập
    const openPopup = () => {
        const popupWindow = window.open(formProductApi, '_blank', 'width=800,height=800');
        if (popupWindow) {
          popupWindow.focus();
        }
      };

    return ( <>
        <div className="section_layout_content">
            <div className="area_section_data">
                <div className="list_info_detail_product">
                    <table className="list_products">
                        <tr className="layout_table">
                            <th className="colum_1">Tên sản phẩm</th>
                            <th className="colum_2">Giá nhập</th>
                            <th className="colum_3">% giảm</th>
                            <th className="colum_4">Ảnh chính</th>
                            <th className="colum_5">Ảnh 1</th>
                            <th className="colum_6">Ảnh 2</th>
                            <th className="colum_7">Ảnh 3</th>
                            <th className="colum_8">Loại</th>
                        </tr>
                        {plants.map((plant) => (
                            <tr className="layout_list" key={plant.id} onClick={() => handleRowClick(plant)}>
                            <th>{plant.name}</th>
                            <th>{plant.price_new}</th>
                            <th>{plant.discount}</th>
                            <th>{plant.picture_main}</th>
                            <th>{plant.picture_other_1}</th>
                            <th>{plant.picture_other_2}</th>
                            <th>{plant.picture_other_3}</th>
                            <th>{plant.type_plant}</th>
                        </tr> 
                        ))}
                                              
                    </table>
                </div>
            </div>
            <div className="area_edit_info_product">
                <div className="edit_list_product">
                    <form className="form_edit" action="">
                        <div>
                            <div className="form-group">
                                <label for="name">Tên sản phẩm:</label>
                                <input type="text" id="name_product" name="name_product" 
                                placeholder={selectedProduct.name}
                                onChange={(e) => setNameProduct(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label for="discount">% giảm giá:</label>
                                <input type="text" id="discount" name="discount" 
                                    placeholder={selectedProduct.discount}
                                    onChange={(e) => setDiscountProduct(e.target.value)}
                                ></input>
                            </div> 
                            <button className="btn-product btn-insert" onClick={openPopup}>Thêm</button>
                            <input type="submit" className="btn-product btn-delete" value="Xóa" onClick={handleDeleteProduct}></input>
                            <input type="submit" className="btn-product btn-update" value="Sửa" onClick={handleUpdateProduct}></input>
                        </div>
                        <div>
                            <div className="form-group">
                                <label for="price_new">Giá nhập:</label>
                                <input type="text" id="price_new" name="price_new" 
                                     placeholder={selectedProduct.price_new}
                                    onChange={(e) => setPriceProduct(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label for="pic_main">Ảnh chính:</label>
                                <input type="text" id="pic_main" name="pic_main"
                                    placeholder={selectedProduct.picture_main}
                                    onChange={(e) => setMainPic(e.target.value)}
                                ></input>
                               
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label for="pic_1">Ảnh 1:</label>
                                <input type="text" id="pic_1" name="pic_1" 
                                 placeholder={selectedProduct.picture_other_1}
                                    onChange={(e) => setPic1(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label for="pic_2">Ảnh 2:</label>
                                <input type="text" id="pic_2" name="pic_2" 
                                 placeholder={selectedProduct.picture_other_2}
                                    onChange={(e) => setPic2(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label for="pic_3">Ảnh 3:</label>
                                <input type="text" id="pic_3" name="pic_3" 
                                 placeholder={selectedProduct.picture_other_3}
                                    onChange={(e) => setPic3(e.target.value)}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label for="type">Thể loại:</label>
                                <input type="text" id="type" name="type" 
                                 placeholder={selectedProduct.type_plant}
                                    onChange={(e) => setTypeProduct(e.target.value)}
                                ></input>
                            </div>
                           
                        </div>
                    </form>
                </div>
                
            </div>

        </div>
        
    </> );
}

export default ManageProduct;