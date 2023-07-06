import React from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
import { CloseIcon } from "../CloseIcon";
import { MinusIcon } from '@heroicons/react/24/solid'


function OrderCard({data, addCantProduct, reduceCantProduct, cantidad}) {
    const {shoppingCart, setShoppingCart} = React.useContext(ShoppingCartContext);

    let renderXMarkIcon;
    let renderCounter;

    if (addCantProduct) {
        renderXMarkIcon = <div onClick={() => removeProduct(data.title)}>
        <CloseIcon color='white'/>
        </div>
        renderCounter = <div className="text-white text-2xl mr-3 flex flex-col">
        <p className="text-3xl p-1 font-semibold flex justify-center items-center bg-blue-700 bg-opacity-60">{data.cantidad}</p>
        <div className="flex justify-between">
            <MinusIcon 
                className=" border w-7 h-7 p-1 flex justify-center items-center  stroke-white"
                onClick={() => {if (data.cantidad == 1){
                    removeProduct(data.title);
                } else {
                   reduceCantProduct(data.title) 
                }}  
                }         
            >
            </MinusIcon>
            <PlusIcon 
                className=" border  w-7 h-7 p-1 flex justify-center items-center  stroke-white"
                onClick={() => addCantProduct(data.title)}
            >
            </PlusIcon>
        </div>
        </div>
    } else {
        renderCounter = <p className="text-xl text-white font-semibold flex justify-center items-center bg-opacity-60 ">Cantidad: {data.cantidad}</p>
    }

    const removeProduct = (title) => {
        const deletedProduct = shoppingCart.filter(product => product.title == title)
        data.inCart = false;
        console.log(title)
        setShoppingCart(prevProducts => prevProducts.filter(product => product.title != title));
    }

    return(
        <div className="bg-gray-800 cursor-pointer w-full  flex mb-3">
            <figure className="relative w-1/6 h-full bg-blue-400">
                <img className="w-full object-cover m-auto" src={data.images} alt={data.description}/>
            </figure>
            <div className="flex items-center w-3/4 m-auto">
                <div className="w-48 mr-5 ">
                    <p className="text-sm text-left text-white">{data.title}</p>
                    <p className="text-xl text-left font-bold text-white">${data.price}</p>
                </div>
                {renderCounter}
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export { OrderCard };