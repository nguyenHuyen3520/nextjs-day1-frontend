import { InferGetStaticPropsType } from 'next'

type Product = {
  id: number,
  name: string
  price: number
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}`)
  const products: Product[] = await res.json()

  return {
    props: {
      products,
    },
  }
}

function Product({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const data: Product[] = products

  return (
    <div>
      <h1 id="ProductPage">Day la trang Product</h1>
      <ul>
        {
          products.map((item, index) => (
            <li key={index}> {item.name} - { item.price} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Product