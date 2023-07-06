import React from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
import { data } from 'autoprefixer';



function Home() {
  const {filteredProducts, setFilteredProducts, setInputValue, category} = React.useContext(ShoppingCartContext);

  console.log(category);
  console.log(filteredProducts);

  const renderProducts = () => {
    if (filteredProducts?.length == 0) {
      return (
        <div className='w-screen text-3xl '>
          <h1 >No products related with your search</h1>
        </div>
        )
    } else {
      return (
        filteredProducts?.map(product => {
        product.inCart = false;
        product.price = Math.ceil(product.price);
        return <Card key={product.id} data={product}/>
        })
      )
    }
  }

  return (
      <Layout>
        <div className='flex items-center justify-center w-96 mb-8'>
          <h1 className='font-bold text-3xl'>OUR PRODUCTS</h1>
        </div>
        <input 
          type="text" 
          placeholder='Busca lo que tienes en mente...'
          className='bg-gray-200 w-1/2 py-2 px-1.5 mb-8'
          onChange={(event) => {setInputValue(event.target.value)}}
        />
        <div className='grid grid-cols-3 gap-8 w-full max-w-screen-xl '>
          {renderProducts()}
        </div>
        <ProductDetail></ProductDetail>
      </Layout> 
  )
}

export default Home;