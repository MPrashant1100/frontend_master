import React,{useState} from 'react'

function ShoppingList() {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState('')
    const handleAddProduct = () => {
        setProducts((products) => [...products, product])
        setProduct('')
    }
    const myProduct = product => (            // use for map function  
        <li key={product}>{product}</li>
    )
    console.log(products)
  return (
    <div className='flex justify-center justify-items-center bg-blue-100 rounded-lg w-auto h-auto m-auto p-5'>
      <div>
        <h1 className='font-bold text-2xl'>Shopping List</h1>
        <div className='p-2 w-auto h-full'>
            <h2 className='font-semibold italic text-xl m-5'>Items to Buy</h2>
            <input className='mx-3 rounded-lg p-1 px-2 shadow-lg' type='text' value={product} onChange={e => setProduct(e.target.value)} 
            placeholder='Add a new item' />
            <button className='bg-yellow-500 p-1 px-2 rounded-lg shadow-lg' onClick={handleAddProduct}>Add Product</button>            
            <ul className='bg-white w-full m-5 mx-1 rounded-lg shadow-lg'>
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