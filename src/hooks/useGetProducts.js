import {useEffect, useState} from 'react'
import axios from 'axios'

const useGetProducts = (API) => {
    const [products, setProducts] = useState([])
    let category= "Others"


    useEffect(async ()=> {
        const response = await axios(API)
        setProducts(response.data)
    }, [])


    // const productsFilter = products.filter(function (item){
    //     if(item.category.name === category) {
    //         console.log(item)
    //         return item
    //     } 
    // })


    return products
    
}

export default useGetProducts