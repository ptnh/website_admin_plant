import './body.scss';
import { useState, useEffect, useRef } from 'react';
import {commentApiSumFull, commentApiSumI, commentApiSumII, commentApiSumIII, orderApiSumMoneyFull, orderApiSumMoneyQuy, orderApiSumMoneyThang, orderApiSumMoneyTuan, productBoughtApiSumFull, productBoughtApiSumI, productBoughtApiSumII, productBoughtApiSumIII, statusApiSumAccepted, statusApiSumDriving, statusApiSumFull, statusApiSumWait} from '../../api';

function Body(){
    const [percentageRevenue, setPercentageRevenue] = useState(0);
    const intervalRef = useRef(null); // Sử dụng useRef để lưu biến interval
    
    // tổng doanh thu
    const handleManageRevenueClick = (targetPercentage) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setPercentageRevenue(0);
        }
  
        intervalRef.current = setInterval(() => {
            setPercentageRevenue((prevPercentage) => {
                if (prevPercentage === targetPercentage) {
                    clearInterval(intervalRef.current);
                    return prevPercentage;
                } else {
                    return prevPercentage + 1;
                }
            });
        }, 10);
    };
    // tổng doanh thu tổng
    const [orderRevenue, setOrderRevenue] = useState([]);
    useEffect(() => {
        fetch(orderApiSumMoneyFull)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_amount !== undefined) {
                    setOrderRevenue(data.total_amount);
                }
              })
    }, []);
    // tổng doanh thu quý
    const [orderQuarterly, setOrderQuarterly] = useState([]);
    useEffect(() => {
        fetch(orderApiSumMoneyQuy)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_amount !== undefined) {
                    setOrderQuarterly(data.total_amount);
                }
              })
    }, []);
    // tổng doanh thu tháng
    const [orderMonth, setOrderMonth] = useState([]);
    useEffect(() => {
        fetch(orderApiSumMoneyThang)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_amount !== undefined) {
                    setOrderMonth(data.total_amount);
                }
              })
    }, []);
    // tổng doanh thu tuần
    const [orderWeek, setOrderWeek] = useState([]);
    useEffect(() => {
        fetch(orderApiSumMoneyTuan)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_amount !== undefined) {
                    setOrderWeek(data.total_amount);
                }
              })
    }, []);
    
    // Trạng thái đơn hàng
    const [percentageTransport, setPercentageTransport] = useState(0);
    const intervalTransportRef = useRef(null); // Sử dụng useRef để lưu biến interval
    const handleManageTransportClick = (targetPercentage) => {
        if (intervalTransportRef.current) {
            clearInterval(intervalTransportRef.current);
            setPercentageTransport(0);
        }
  
        intervalTransportRef.current = setInterval(() => {
            setPercentageTransport((percentageTransport) => {
                if (percentageTransport === targetPercentage) {
                    clearInterval(intervalTransportRef.current);
                    return percentageTransport;
                } else {
                    return percentageTransport + 1;
                }
            });
        }, 10);
    };

    // tổng đơn hàng
    const [orderStatus, setOrderStatus] = useState([]);
    useEffect(() => {
        fetch(statusApiSumFull)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_count !== undefined) {
                    setOrderStatus(data.total_count);
                }
              })
    }, []);
    // tổng đơn hàng chờ duyệt
    const [orderStatusWait, setOrderStatusWait] = useState([]);
    useEffect(() => {
        fetch(statusApiSumWait)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_count !== undefined) {
                    setOrderStatusWait(data.total_count);
                }
              })
    }, []);
    // tổng đơn hàng Đã duyệt
    const [orderStatusWaitAccepted, setOrderStatusWaitAccepted] = useState([]);
    useEffect(() => {
        fetch(statusApiSumAccepted)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_count !== undefined) {
                    setOrderStatusWaitAccepted(data.total_count);
                }
              })
    }, []);
    // tổng đơn hàng Đang chuyển
    const [orderStatusDriving, setOrderStatusDriving] = useState([]);
    useEffect(() => {
        fetch(statusApiSumDriving)
            .then((response) => response.json())
            .then(data => {
                if (data && data.total_count !== undefined) {
                    setOrderStatusDriving(data.total_count);
                }
              })
    }, []);

    // sản phẩm bán chạy
    const [percentageBestSeller, setPercentageBestSeller] = useState(0);
    const intervalBestSellerRef = useRef(null); // Sử dụng useRef để lưu biến interval
    const handleManageBestSellerClick = (targetPercentage) => {
        if (intervalBestSellerRef.current) {
            clearInterval(intervalBestSellerRef.current);
            setPercentageBestSeller(0);
        }
  
        intervalBestSellerRef.current = setInterval(() => {
            setPercentageBestSeller((percentageBestSeller) => {
                if (percentageBestSeller === targetPercentage) {
                    clearInterval(intervalBestSellerRef.current);
                    return percentageBestSeller;
                } else {
                    return percentageBestSeller + 1;
                }
            });
        }, 10);
    };
    // tổng số sản phẩm đã bán
    const [orderQuantity, setOrderQuantity] = useState([]);
    useEffect(() => {
        fetch(productBoughtApiSumFull)
            .then((response) => response.json())
            .then(data => {
                if (data && data.tongsoluong !== undefined) {
                    setOrderQuantity(data.tongsoluong);
                }
              })
            
    }, []);
    // tổng sl sản phẩm cao nhất
    const [orderQuantityRank1, setOrderQuantityRank1] = useState([]);
    useEffect(() => {
        fetch(productBoughtApiSumI)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setOrderQuantityRank1(data);
                }
              })
    }, []);
    // tổng sp cao 2
    const [orderQuantityRank2, setOrderQuantityRank2] = useState([]);
    useEffect(() => {
        fetch(productBoughtApiSumII)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setOrderQuantityRank2(data);
                }
              })
    }, []);
    // tổng sp cao 3
    const [orderQuantityRank3, setOrderQuantityRank3] = useState([]);
    useEffect(() => {
        fetch(productBoughtApiSumIII)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setOrderQuantityRank3(data);
                }
              })
    }, []);

    

    // Đánh giá, bình luận sản phẩm
const [percentageComments, setPercentageComments] = useState(0);
const intervalCommentsRef = useRef(null); // Sử dụng useRef để lưu biến interval

const handleManageCommentsClick = (targetPercentage) => {
    if (intervalCommentsRef.current) {
        clearInterval(intervalCommentsRef.current);
        setPercentageComments(0);
    }

    intervalCommentsRef.current = setInterval(() => {
        setPercentageComments((prevPercentage) => {
            if (prevPercentage === targetPercentage) {
                clearInterval(intervalCommentsRef.current);
                return prevPercentage;
            } else {
                return prevPercentage + 1;
            }
        });
    }, 10);
};


    const [comments, setComments] = useState(0);
    useEffect(() => {
        fetch(commentApiSumFull)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setComments(data);
                }
              })
    }, []);
    const [commentsGood, setCommentsGood] = useState(0);
    useEffect(() => {
        fetch(commentApiSumI)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setCommentsGood(data);
                }
              })
    }, []);
    const [commentsAvg, setCommentsAvg] = useState(0);
    useEffect(() => {
        fetch(commentApiSumII)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setCommentsAvg(data);
                }
              })
    }, []);

    const [commentsBad, setCommentsBad] = useState(0);
    useEffect(() => {
        fetch(commentApiSumIII)
            .then((response) => response.json())
            .then(data => {
                if (data && data !== undefined) {
                    setCommentsBad(data);
                }
              })
    }, []);


    return (
        <>
            <div className="section_layout_content">
                <div className="top_content">
                    <div className="layout_infomation_content">
                        <h4 className="title_infomation">Đánh giá sản phẩm</h4>
                        <hr style={{ width: '100%' }} />
                        <div className="detail_infomation">
                            <div className="left_info">
                                <div className="chart_revenue total_revenue" style={{ position: 'relative' }}>
                                    <h4>Tổng doanh thu:</h4>
                                    <p>{orderRevenue}</p>
                                    <div className="manage_revenue" onClick={() => handleManageRevenueClick(100)}>
                                        {percentageRevenue}%
                                    </div>
                                </div>
                                <div className="chart_revenue quarterly_revenue">
                                    <h4>Theo quý</h4>
                                    <p>{orderQuarterly}</p>
                                    <div className="manage_revenue" onClick={() => handleManageRevenueClick(Math.round((orderQuarterly / orderRevenue) * 100))}>
                                        {percentageRevenue}%
                                    </div>
                                </div>
                                <div className="chart_revenue quarterly_month">
                                    <h4>Theo tháng</h4>
                                    <p>{orderMonth}</p>
                                    <div className="manage_revenue" onClick={() => handleManageRevenueClick(Math.round((orderMonth / orderRevenue) * 100))}>
                                        {percentageRevenue}%
                                    </div>
                                </div>
                                <div className="chart_revenue quarterly_day">
                                    <h4>Theo tuần</h4>
                                    <p>{orderWeek}</p>
                                    <div className="manage_revenue" onClick={() => handleManageRevenueClick(Math.round((orderWeek / orderRevenue) * 100))}>
                                        {percentageRevenue}%
                                    </div>
                                </div>
                            </div>
                            <div className="right_info">
                                <div className="progress_circle_revenue">
                                    <div className="progress_total_revenue"  style={{
                                        background: `conic-gradient(#c3f900 ${percentageRevenue * 3.6}deg, white 0deg)`,
                                    }}>
                                        <span className="percentage">{percentageRevenue}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout_infomation_content">
                        <h4 className="title_infomation">Vận chuyển đơn hàng</h4>
                        <hr style={{width:'100%'}}></hr>
                        <div className="detail_infomation">
                            <div className="left_info">                           
                                <div className="chart_transport total_transport">
                                    <h4>Tổng đơn:</h4>
                                    <p>{orderStatus}</p>
                                    <div className="manage_transport" 
                                    onClick={() => handleManageTransportClick(100)}>
                                        {percentageTransport}%
                                    </div>
                                </div>    
                                <div className="chart_transport total_shipped">
                                    <h4>Đã chuyển:</h4>
                                    <p>{orderStatusWaitAccepted}</p>
                                    <div className="manage_transport"
                                    onClick={() => handleManageTransportClick(Math.round((orderStatusWaitAccepted / orderStatus) * 100))}
                                    >{percentageTransport}%</div>
                                </div>    
                                <div className="chart_transport total_shipping">
                                    <h4>Đang chuyển:</h4>
                                    <p>{orderStatusDriving}</p>
                                    <div className="manage_transport"
                                    onClick={() => handleManageTransportClick(Math.round((orderStatusDriving / orderStatus) * 100))}
                                    >{percentageTransport}%</div>
                                </div>
                                <div className="chart_transport total_not_ship">
                                    <h4>Chờ duyệt:</h4>
                                    <p>{orderStatusWait}</p>
                                    <div className="manage_transport"
                                    onClick={() => handleManageTransportClick(Math.round((orderStatusWait / orderStatus) * 100))}
                                    >{percentageTransport}%</div>
                                </div>
                            </div>
                            <div className="right_info">
                                <div className="progress_circle_transport">
                                    <div className="progress_total_transport" style={{
                                        background: `conic-gradient(#c3f900 ${percentageTransport * 3.6}deg, white 0deg)`,
                                    }}>
                                        <span className="percentage_transport" >{percentageTransport}%</span>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                

                </div>

                <div className="bottom_content">
                    <div className="layout_infomation_content">
                        <h4 className="title_infomation">Sản phẩm bán chạy</h4>
                        <hr style={{width:'100%'}}></hr>
                        <div className="detail_infomation">
                            <div className="left_info">                           
                                <div className="chart_comment total_comment" style={{position: 'relative'}}>
                                    <h4>Số lượng đã bán:</h4>
                                    <p>{orderQuantity}</p>
                                    <div className="manage_comment"
                                        onClick={() => handleManageBestSellerClick(100)}>
                                            {percentageBestSeller}%
                                    </div>
                                </div>    
                                <div className="chart_comment comment_5*">
                                    <h4>Chạy I:</h4>
                                    <p>{orderQuantityRank1.name_product}</p>
                                    <div className="manage_comment"
                                        onClick={() => handleManageBestSellerClick(Math.round((orderQuantityRank1.tongsoluong / orderQuantity) * 100))}>
                                        {percentageBestSeller}%
                                    </div>
                                </div>    
                                <div className="chart_comment comment_4*">
                                    <h4>Chạy II:</h4>
                                    <p>{orderQuantityRank2.name_product}</p>
                                    <div className="manage_comment"
                                        onClick={() => handleManageBestSellerClick(Math.round((orderQuantityRank2.tongsoluong / orderQuantity) * 100))}
                                    >
                                        {percentageBestSeller}%
                                    </div>
                                </div>
                                <div className="chart_comment comment_3*">
                                    <h4>Chạy III:</h4>
                                    <p>{orderQuantityRank3.name_product}</p>
                                    <div className="manage_comment"
                                        onClick={() => handleManageBestSellerClick(Math.round((orderQuantityRank3.tongsoluong / orderQuantity) * 100))}
                                    >
                                        {percentageBestSeller}%
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="right_info">
                                <div className="progress_circle_comment">
                                    <div className="progress_total_comment" style={{
                                        background: `conic-gradient(#c3f900 ${percentageBestSeller * 3.6}deg, white 0deg)`,
                                    }}>
                                        <span className="percentage_comment"> {percentageBestSeller}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="layout_infomation_content">
                        <h4 className="title_infomation">Đánh giá sản phẩm</h4>
                        <hr style={{width:'100%'}}></hr>
                        <div className="detail_infomation">
                            <div className="left_info">
                                <div className="chart_thinking total_thinking" style={{position: 'relative'}}>
                                    <h4>Tổng lượt đánh giá:</h4>
                                    <p>{comments.total_count}</p>
                                    <div className="manage_thinking"
                                        onClick={() => handleManageCommentsClick(100)}>
                                        {percentageComments}%
                                    </div>
                                </div>    
                                <div className="chart_thinking thinking_5">
                                    <h4>Lượt tốt:</h4>
                                    <p>{commentsGood.total_count}</p>
                                    <div className="manage_thinking"
                                        onClick={() => handleManageCommentsClick(Math.round((commentsGood.total_count / comments.total_count) * 100))}
                                    >{percentageComments}%</div>
                                </div>    
                                <div className="chart_thinking thinking_4">
                                    <h4>Lượt trung:</h4>
                                    <p>{commentsAvg.total_count}</p>
                                    <div className="manage_thinking"
                                        onClick={() => handleManageCommentsClick(Math.round((commentsAvg.total_count / comments.total_count) * 100))}
                                    >{percentageComments}%</div>
                                </div>
                                <div className="chart_thinking thinking_3">
                                    <h4>Lượt xuất:</h4>
                                    <p>{commentsBad.total_count}</p>
                                    <div className="manage_thinking"
                                        onClick={() => handleManageCommentsClick(Math.round((commentsBad.total_count / comments.total_count) * 100))}
                                    >{percentageComments}%</div>
                                </div>
                            </div>
                            <div className="right_info">
                                <div className="progress_circle_thinking">
                                    <div className="progress_total_thinking" style={{
                                        background: `conic-gradient(#c3f900 ${percentageComments* 3.6}deg, white 0deg)`,
                                    }}>
                                        <span className="percentage_thinking">{percentageComments}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Body;