import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const apiUrl = "https://fakestoreapi.com"

function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  console.log(items)

  return (
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg bg-slate-600 ">
          {
            items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
        <ProductDetail />
      </Layout>

  )
}

export default Home