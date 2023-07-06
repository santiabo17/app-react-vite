import React from 'react';
import { Layout } from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import { OrdersCard } from '../../Components/OrdersCard';
import { Link } from 'react-router-dom';


function MyOrders() {
  const { orders } = React.useContext(ShoppingCartContext);

  console.log(orders);

  return (
    <Layout>
      MyOrders Page
      {   
        orders?.length > 0 ? orders.map((order, index) => 
          <Link className='w-2/5' to = {`/myorders/${index}`}>
            <OrdersCard 
              key={index} 
              order={order} 
            >
            </OrdersCard>
          </Link>
        ) : <h1 className='text-8xl m-auto absolute top-72 font-bold'>NO HAY ORDENES AQUI</h1>     
      }
    </Layout>
  )
}

export default MyOrders