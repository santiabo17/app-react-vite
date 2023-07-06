import React from "react";
import { NavLink } from "react-router-dom";
import { totalProductsInCart } from "../../utils";
import { ShoppingCartContext } from "../../Context";


function Navbar () {

    const activeStyle = 'underline underline-offset-4';
    const {shoppingCart, setCategory, setSearchValue} = React.useContext(ShoppingCartContext);

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full px-8 py-5 pb-3 text-sm font-light top-0 bg-gray-100">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink 
                        to='/' 
                    >
                        LAPICO
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick = {() =>  {        
                            setCategory('');
                        }}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }  
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick = {() => setCategory('Clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick = {() => setCategory('Electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }  
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        onClick = {() => setCategory('Furniture')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }      
                    >
                        Furnitures
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className=" text-orange-600/5 0 font-medium">
                    lapico@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/myorders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } 
                    >
                        My-Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/myaccount'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }     
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/signin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } 
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="text-black">
                    🛒{totalProductsInCart(shoppingCart)}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar };