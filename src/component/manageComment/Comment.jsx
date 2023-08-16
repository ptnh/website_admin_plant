import './comment.scss';
import React, { useState, useEffect } from 'react';
import { deleteCommentApi, readCommentApi } from '../../api';

function Comment() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`${readCommentApi}?id_plantss=1`)
            .then((response) => response.json())
            .then((data) =>  setComments(data));
    }, []);

    const [idPlant, setIdPlant] = useState(0);
    const [nameProduct, setNameProduct] = useState();
    const [count, setCount] = useState();
    const [avgStart, setAvgStart] = useState();
    const [content, setContent] = useState();
    const [human, setHuman] = useState();
    const [email, setEmail] = useState();
    const [idComment, setIdComment] = useState();
    useEffect(() => {
        fetch(`${readCommentApi}?id_plants=${idPlant}`)
            .then((response) => response.json())
            .then((data) => {
                let totalStart = 0;

                for (const comment of data) {
                    totalStart += parseFloat(comment.sosao); // Chuyển sosao từ chuỗi sang số để tính toán
                }
                let totalSl = 0;

                for (const comment of data) {
                    totalSl += parseFloat(comment.sl); // Chuyển sosao từ chuỗi sang số để tính toán
                }
                const averageStart = totalSl > 0 ? totalStart / totalSl : 0;
                setCount(totalSl);
                const formattedAvgStart = averageStart.toFixed(1); // Định dạng có 1 chữ số sau dấu phẩy
                setAvgStart(formattedAvgStart);
            });
    }, [idPlant]);
    
    const handleRowClickComment = (comment) => {
        setNameProduct(comment.name);
        setIdPlant(comment.id);
        setContent(comment.content);
        setHuman(comment.name_client);
        setEmail(comment.email_client);
        setIdComment(comment.id_comment);
    }

    const handleDeleteComment = () =>{
        const formData2 = new FormData();
        formData2.append('id_comment', idComment);    

        fetch(deleteCommentApi, {
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
                    <div className="list_info_detail_comment">
                        <table className="list_comment">
                            <tr className="layout_table_order">
                                <th className="colum_1_order">Tên sản phẩm</th>                            
                                <th className="colum_2_order">Nội dung nhận xet</th>
                                <th className="colum_3_order">Người nhận xét</th>
                                <th className="colum_4_order">Sao đánh giá</th>
                            </tr>
                            
                            {comments.map((comment) => (
                                <tr className="layout_list_order" key={comment.id} onClick={() => handleRowClickComment(comment)}>
                                    <th>{comment.name}</th>
                                    <th>{comment.content}</th>
                                    <th>{comment.name_client}</th>
                                    <th>{comment.start}</th>
                                </tr> 
                            ))}                                           
                        </table>
                    </div>

                    
                </div>
                
                
                <div style={{display:'flex'}}>       
                    <div className="list_info_detail_comments">
       
                            <form>
                                <div class="form-group-comment">
                                    <label class="form-label" for="name">Sản phẩm:</label>
                                    <input class="form-input" type="text" id="name" name="name" 

                                    value={nameProduct}
                                    required></input>
                                </div>
                                <div class="form-group-comment">
                                    <label class="form-label" for="address">Số lượt đánh giá:</label>
                                    <input class="form-input" type="text" id="address" name="address" 
 
                                    value={count} 
                                    required></input>
                                </div>
                                <div class="form-group-comment">
                                    <label class="form-label" for="phone">Điểm trung bình:</label>
                                    <input class="form-input" type="tel" id="phone" name="phone" 
         
                                    value={avgStart} 
                                    required></input>
                                </div>
                               
                            </form>

                    </div>
                    <div className="area_edit_info_content">
                        <div className="edit_list_content">
                            <form className="form_edit" action="">
                
                                <div>
                                    <div className="form-group-detail-content">
                                        <label for="id_order">Nội dung đánh giá:</label>
                                        <input type="text" id="id_order" name="id_order" 
                                           
                                            value={content}
                                        ></input>
                                    </div>
                                    <div className="form-group-detail-content">
                                        <label for="status_order">Người đánh giá:</label>
                                        <input type="text" id="status_order" name="status_order" 
                                            
                                            value={human}
                                            required
                                        ></input>
                                    </div> 
                                    <div className="form-group-detail-content">
                                        <label for="status_order">Phương thức liên hệ:</label>
                                        <input type="text" id="status_order" name="status_order" 
                                            
                                            value={email}
                                            required
                                        ></input>
                                    </div> 
                                    
                                    <input type="submit" className="btn-update" value="Xóa bình luận" onClick={handleDeleteComment}></input>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default Comment;