/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line

import { Link } from "react-router-dom";

function RequestProduct(props) {
    
    return (
        <>
            {props.data.slice(0, 6).map((product) => (
                <li
                    key={product.id}
                    className="sectionTwoProduct__item col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6"
                >
                    <span>
                        {/* Ok Vào rồi thì cúng ta sẽ lấy dc các product vừa ta lấy được ở giao diện 
                        xong giờ ta dùng map duyệt qua 6 phần tử đầu để demo trên web và truyền theo dạng
                        listProduct/id cho nó để tý lấy cái id trang web ok giờ ta vào hám index của thư mục
                        showwProductRouter nhé */}
                        <Link to={`listProduct/${product.id}`} className="sectionTwoProduct__itemTmb">
                            <span className="sectionTwoProduct__itemTmb--image">
                                <img alt={product.title} src={product.thumbnail}></img>
                            </span>
                            <div className="sectionTwoProduct__itemTmb--description">
                                <span className="sectionTwoProduct__itemTmb--txt">
                                    {product.descriptionTitle}
                                </span>
                            </div>
                        </Link>
                    </span>
                </li>
            ))}
        </>
    );
}
export default RequestProduct;
