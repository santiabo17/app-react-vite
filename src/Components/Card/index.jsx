import React from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'

function Card({data}) {
    const {setCount, openProductDetail, closeProductDetail, productDetail, setProductDetail, shoppingCart, setShoppingCart, addProductsToCart, openCheckoutSideMenu, closeCheckoutSideMenu} = React.useContext(ShoppingCartContext)

    const showProduct = (productData) => {
        console.log(productData);
        console.log(productData.cantidad)
        openProductDetail();
        closeCheckoutSideMenu();
        console.log(productData);
        setProductDetail(productData);
    }
    
   

    const renderIcon = (id) => {
        const cantProductInTheCart = shoppingCart.filter(product => product.id == id);
        if (cantProductInTheCart.length > 0)
            {console.log(cantProductInTheCart);
            return (
                <div 
                className="absolute top-1 right-1 flex justify-center items-center text-3xl font-bold bg-black w-10 h-10 rounded-full"
                >
                    <CheckIcon className="h-8 stroke-white text-white"/>
                </div>
            )
        } else {
           return (
            <div 
                className="absolute top-1 right-1 flex justify-center items-center text-3xl font-bold bg-white w-10 h-10 rounded-full"
                onClick={(event) => {
                addProductsToCart(event, data); 
                }}
            >
                <PlusIcon className="h-8 stroke-black"/>
            </div>
            ) 
        } 
    }

    return(
        <div 
            className="bg-gray-200 cursor-pointer h-72"
            onClick={() => showProduct(data)}
        >
            <figure className="relative mb-2 w-full h-3/4 ">
                <img className="h-full m-auto" src={data.images} alt="headphones"/>
                <span className="absolute bottom-1 left-1 bg-white/50 rounded-lg p-1 text-sm">{data.category.name}</span>
                {renderIcon(data.id)}
            </figure>
            <p className="mt-4 pr-2.5 pl-2.5 flex justify-between items-center ">
                <span>{data.title}</span>
                <span className="text-xl font-bold">${data.price}</span>
            </p>
        </div>
    )
}

export { Card };