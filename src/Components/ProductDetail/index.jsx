import './ProductDetail.css';
import { CloseIcon } from '../CloseIcon';
import React from 'react';
import { ShoppingCartContext } from '../../Context';

function ProductDetail() {
    const {isOpenProductDetail, closeProductDetail, productDetail, addProductsToCart} = React.useContext(ShoppingCartContext);

    return (
        <aside className={`${isOpenProductDetail ? 'flex' : 'hidden'} product-detail flex-col fixed right-4 border border-orange-500 bg-white`}>
            <div className='flex justify-between items-center px-5 py-3'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => closeProductDetail()}>
                    <CloseIcon color='black'/>
                </div>
            </div>
            <div className='py-3 px-3 flex flex-col bg-gray-200 h-full'>
                <h1 className='font-medium text-3xl'>
                    {productDetail.title}
                </h1>
                <img src={productDetail.image} className='w-24 h--max m-auto mt-4 mb-4'/>
                <h2 className='text-left text-xs font-medium'>
                    {productDetail.description}
                </h2>
                <h2 className='text-right text-3xl font-medium mb-5'>
                    ${productDetail.price}
                </h2>
            </div>
            <div className='bg-gray-200 p-4'>
                <button 
                    className={`${productDetail.inCart == false ? 'flex' : 'hidden'} bg-gray-600 text-white h-12 w-full`}
                    onClick={(event) => addProductsToCart(event, productDetail)}
                >
                    Add to Cart
                </button>
            </div>
            
        </aside>
    )
}

export { ProductDetail }