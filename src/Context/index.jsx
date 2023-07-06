import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ShoppingCartContext = React.createContext()

function ShoppingCartProvider(props) {

    //  Products
    const [products, setProducts] = React.useState(null);

    const [filteredProducts, setFilteredProducts] = React.useState(null);

    React.useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(data => data.json())
        .then(data => setProducts(data))
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(data => setProducts(data))
        
      }, [])

     //Find products
     const [inputValue, setInputValue] = React.useState('');

     const [category, setCategory] = React.useState('');

    const filterProductsByName = (products, inputValue) => {
        return products?.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase()))
    }

    const filterProductsByCategory = (products, category) => {
        return products?.filter(product => product.category.name.toLowerCase() == category.toLowerCase())
    }

    // React.useEffect(() => {
    //     if (inputValue == ''){
    //         setFilteredProducts(products)
    //     } else {
    //         setFilteredProducts(filterProductsByName(products, inputValue));
    //     }
    // }, [products, inputValue])

    React.useEffect(() => {
        if (category != ''){
            setFilteredProducts(filterProductsByCategory(filterProductsByName(products, inputValue), category));
        } else {
            setFilteredProducts(filterProductsByName(products, inputValue));
        }
    }, [products, inputValue, category])


    // ProductDetail
    const [isOpenProductDetail, setIsOpenProductDetail] = React.useState(false);

    const openProductDetail = () => {
        setIsOpenProductDetail(true);
    }

    const closeProductDetail = () => {
        setIsOpenProductDetail(false);
        console.log('puto')
    }

    const [productDetail, setProductDetail] = React.useState({});
    

    //shoppingCart
    
    const [shoppingCart, setShoppingCart] = React.useState([]);

    //orders
    const {item: orders, saveItem: saveOrders} = useLocalStorage('orders', []);

    console.log('orders');
    console.log(orders);

    const addProductsToCart = (event, product) => {
        event.stopPropagation();
        product.inCart = true;
        product.cantidad = 1;
        console.log(product);
        setShoppingCart([...shoppingCart, product]);
        openCheckoutSideMenu();
        closeProductDetail();
        console.log(shoppingCart);
    }

    const [isOpenCheckoutSideMenu, setIsOpenCheckoutSideMenu] = React.useState(false);

    const openCheckoutSideMenu = () => {
        setIsOpenCheckoutSideMenu(true);
        console.log('open')
    }
    const closeCheckoutSideMenu = () => {
        setIsOpenCheckoutSideMenu(false);
    }

   

    return (
        <ShoppingCartContext.Provider value={{
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            productDetail,
            setProductDetail,
            shoppingCart,
            setShoppingCart,
            addProductsToCart,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isOpenCheckoutSideMenu,
            orders,
            saveOrders,
            products,
            setProducts,
            inputValue,
            setInputValue,
            filteredProducts,
            setFilteredProducts,
            category,
            setCategory
        }}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
};

export {ShoppingCartProvider, ShoppingCartContext}
