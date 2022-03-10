import React from 'react'
import ProductItem from "../components/ProductItem";
import '../styles/ProductList.scss'
import useGetProducts from '../hooks/useGetProducts'

const API = 'https://api.escuelajs.co/api/v1/products'


const ProductList = () => {
    let category = "Clothes"
    let products = useGetProducts(API)
    
    products = products.filter(function (item){
        if(item.category.name === category) {
            // console.log(item)
            return item
        } else if ( category === "All"){
            return item
        }
        
    })

    return (
    <section className="productList">
        <div className="cards-container">
        {products.map(product => {
            return(
            <ProductItem 
            product={product}
            key={product.id}
            />)
        })}
        </div>
    </section>
    )
} 

export default ProductList
