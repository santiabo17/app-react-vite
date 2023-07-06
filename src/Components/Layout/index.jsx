function Layout (props) {
    return (
       <div className="flex flex-col mt-20 items-center">
            {props.children}
       </div> 
    )
}

export { Layout };