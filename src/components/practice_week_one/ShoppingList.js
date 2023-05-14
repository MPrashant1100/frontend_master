import React,{useState} from 'react'
function ShoppingList() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState('')
    const handleAddProduct = () => {
        setProducts((products) => [...products, product])
        setProduct('')
    }
    const myProduct = product => (               // use for map function  
        <li key={product}>{product}</li>
    )
    console.log(products)
  return (
    <div>
      <div>
        <h1>Shopping List</h1>
        <div>
            <h2>Items to Buy</h2>
            <input type='text' value={product} onChange={e => setProduct(e.target.value)} 
            placeholder='Add a new item' />
            <button onClick={handleAddProduct}>Add Product</button>            
            <ul>
                {
                    products.map(myProduct      
                        //product => (<li key={product}>{product}</li>) 
                     )                    
                }
            </ul>
         </div>
      </div>
    </div>
  )
}

export default ShoppingList