
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line

function RequestProduct(props){
    
      
    return (
        <>
        {
            props.data.slice(0, 6).map((product) => (
                <li className="sectionTwoProduct__item col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">
                    <span>
                        <a href='#' className="sectionTwoProduct__itemTmb">
                            <span className='sectionTwoProduct__itemTmb--image'>
                                <img alt="" src={product.thumbnail}></img>
                            </span>
                            <div className='sectionTwoProduct__itemTmb--description'>
                                <span className='sectionTwoProduct__itemTmb--txt'>
                                    {product.descriptionTitle}
                                </span>
                            </div> 
                        </a>
                    </span>
                </li>
            ))
        }
        </>
    )
}
export default RequestProduct