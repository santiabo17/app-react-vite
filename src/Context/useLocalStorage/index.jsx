import React from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = React.useState(initialValue)
    
    React.useEffect(() => {
        let parsedItem;
        const storageItem = localStorage.getItem(itemName);
        if (!storageItem){
            let stringifiedInitialValue = JSON.stringify(initialValue);
            localStorage.setItem(itemName, stringifiedInitialValue);
            parsedItem = initialValue;
        } else {
            parsedItem = JSON.parse(storageItem);
        }

        setItem(parsedItem)
    }, [])
    
    
    const saveItem = (newItem) => {
        console.log('itemSaved');
        console.log(newItem);
        const stringifiedNewItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedNewItem);
        setItem(newItem);
    }

    return {
        item,
        saveItem
    }

}

export { useLocalStorage };