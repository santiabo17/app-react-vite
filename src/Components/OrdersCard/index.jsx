import React from "react";
import { ShoppingCartContext } from "../../Context";
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { RectangleStackIcon }  from "@heroicons/react/24/solid";


function OrdersCard({order}) {
    const {} = React.useContext(ShoppingCartContext);

    return(
        <div className="bg-gray-400 w-full h-12 flex items-center mb-3 border border-black">
            <div className="flex justify-between w-full mr-4">
                <div>
                    <div className="flex justify-between">
                        <CalendarDaysIcon className='w-5 mr-2'/>
                        <p>{order.date}</p>
                    </div>
                    <div className="flex justify-between">
                        <RectangleStackIcon className="w-5 mr-2"/>
                        <p>{order.cantProducts} Productos</p>
                    </div>
                    
                </div>
                
                <p className=" my-auto text-3xl font-bold">${order.totalPrice}</p>
            </div>
            <ChevronRightIcon className="cursor-pointer h-full text-white stroke-white p-1 bg-gray-600"/>
        </div>
    )
}

export { OrdersCard };