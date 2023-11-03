import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

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
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </Layout>
  )
}

export default Home