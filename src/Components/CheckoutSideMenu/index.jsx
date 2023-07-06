import { CloseIcon } from '../CloseIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutSideMenu.css';
import { OrderCard } from '../OrderCard';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
import { useLocalStorage } from '../../Context/useLocalStorage';


function CheckoutSideMenu() {
    const {isOpenCheckoutSideMenu, closeCheckoutSideMenu, shoppingCart, setShoppingCart, saveOrders, orders, setInputValue} = React.useContext(ShoppingCartContext);

    const addCantProduct = (title) => {
        const products = shoppingCart.map(product => {
            if (product.title == title){
                return {
                    ...product,
                    cantidad: product.cantidad + 1
                };
            }
            return product;
            }  
        );
        // const editedProduct = products.filter(product => product.title == title);
        // editedProduct[0].cantidad += 1;
        // console.log(editedProduct);
        setShoppingCart(products);
    }

    const reduceCantProduct = (title) => {
        const products = shoppingCart.map(product => {
            if (product.title == title){
                return {
                    ...product,
                    cantidad: product.cantidad - 1
                };
            }
            return product;
            }  
        );
        // const editedProduct = products.filter(product => product.title == title);
        // editedProduct[0].cantidad -= 1;
        // console.log(editedProduct);
        setShoppingCart(products);
    }

    const handleCheckout = () => {
        let totalProducts = 0;
        shoppingCart.forEach(product => {
            totalProducts += (product.cantidad);    
        });
        const order = {
            date: '02/10/2004',
            products: shoppingCart,
            cantProducts: totalProducts,
            totalPrice: totalPrice(shoppingCart)
        }
        saveOrders([...orders, order]);
        console.log(orders);
        setShoppingCart([]);
        setInputValue('');
        closeCheckoutSideMenu();
    }


    return (
        <aside className={`${isOpenCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed top-20 right-4 border border-orange-500 bg-white`}>
            <div className='flex justify-between items-center px-5 py-3'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div onClick={() => closeCheckoutSideMenu()}>
                    <CloseIcon color='black'/>
                </div>
            </div>
            <div className='py-3 px-3 flex flex-col bg-gray-200 h-full overflow-y-scroll'>
                
                {   
                    shoppingCart?.map(product => {
                    return <OrderCard 
                    key={product.title} 
                    data={product}
                    addCantProduct={addCantProduct} 
                    reduceCantProduct={reduceCantProduct}
                    >
                    </OrderCard>
                    })
                }
            </div>
            <div className='flex  items-end bg-gray-800 justify-center p-2 text-white'>
                <h2 className='text-wm mr-2 '>Precio total:</h2>
                <h1 className='text-xl font-bold '>${totalPrice(shoppingCart)}</h1>
            </div>
            <Link to='myorders/last'>
                <div
                    className='cursor-pointer p-2 font-semibold hover:bg-gray-200'
                    onClick={() => handleCheckout()}
                >
                    Checkout
                </div>
            </Link>
            
        </aside>
    )
}

export {CheckoutSideMenu};