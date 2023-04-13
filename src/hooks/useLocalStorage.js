import { useState } from "react"

function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStoragevalue] = useState(
        () => getLocalStoragevalue('key', initialValue))

    const setValue =(value) =>{
        //check if its a function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        //set to state
        setLocalStoragevalue(value)
        //set to local storage
        localStorage.setItem(key, JSON.stringify(valueToStore) )
    }
  return [localStorageValue, setValue]
}

function getLocalStoragevalue(key, initialValue){
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage