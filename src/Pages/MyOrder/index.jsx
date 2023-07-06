import React from 'react';
import { Layout } from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';


function MyOrder() {

  const { orders } = React.useContext(ShoppingCartContext);
  
  console.log(orders);
  let order;

  const currentPath = window.location.pathname;
  console.log(currentPath.substring(currentPath.lastIndexOf('/') + 1));
  const orderId = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if(orderId == 'last') {
    order = orders[orders.length - 1];
    console.log(order);
  } else {
    order = orders[orderId];
    console.log(order);
  }

  return (
    <Layout>
      <div className=' relative flex py-1 w-1/3 mb-3'>
        <Link to = '/myorders'>
          <ChevronLeftIcon className='text-black absolute left-0 w-6'/>
        </Link>
        <h1 className='m-auto'>MyOrder Page</h1>
      </div>
      
      <div className='flex flex-col w-1/3'>
        {   
        order.products?.map(product => {
          return <OrderCard 
          key={product.title} 
          data={product} 
          >
          </OrderCard>
        })
        }
        <h1 className='bg-gray-900 text-white w-full p-2 text-lg'>Total: {order.totalPrice}</h1>
      </div>
    </Layout>  
  )
}

export default MyOrder;