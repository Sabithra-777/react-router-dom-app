import {useState, useEffect} from 'react';
type ProductsType = {
  id:number,
  title:string,
  category:string,
  price:number,
} 
function Products() {
  const [product,setProducts]=useState<ProductsType[]>([]);
  // loading
  const [isLoading,setIsLoading]=useState<boolean>(true);
  // error
  const [error,setError] =useState("");

  function getProductsData() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getProductsData();
  }, []);

  if (isLoading) {
    return <h1>Products Data Loading</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {
        product.map((p) => (
          <div key={p.id}>
            <h1>{p.id}</h1>
            <p>{p.title}</p>
            <p>{p.category}</p>
            <p>{p.price}</p>
          </div>

        ))
      }

    </div>

  )
}

export default Products;
