
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import React from "react";
import { ShoppingCardContext } from '../../Context';

function Home() {

  const {
    items
} = React.useContext(ShoppingCardContext)

  console.log(items)

  return (
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
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