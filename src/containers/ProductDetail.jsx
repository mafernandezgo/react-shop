import React from 'react'
import ProductInfo from '../components/ProductInfo'
import '../styles/ProductDetail.scss'
// import Icons
import closeIcon from "@icons/icon_close.png"

const ProductDetail = ()=>{
    return (
        <div className="productDetail">
            <div className="pd-close">
                <a href=""><img src={closeIcon} alt="close" /></a>
			</div>
			<ProductInfo />
        </div>
    )
}

export default ProductDetail