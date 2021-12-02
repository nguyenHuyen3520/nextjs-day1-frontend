import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import router, { useRouter } from 'next/router'
import {
   ParsedUrlQuery
} from 'querystring'
type product = {
    id: number,
    name: string,
    price: number,
}

type params = {
    id: number
}

interface IParams extends ParsedUrlQuery {
   id: string
}

function Product({ result }: InferGetStaticPropsType<typeof getStaticProps>) {
  const data: product = result
  console.log(typeof result);
  

  return(
    <div>
      {
        data?(
          <div>        
                <div>{ data.name } </div> 
                <div>{data.price}</div>    
            </div>
          
        ): router.push('/404')
      }
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {

  const res = await fetch(`${process.env.API_URL}`)
  const products: product[] = await res.json()


  const paths= products.map((product: product) => (
    {params: { id: product.id.toString() }}
  ))

  return { paths, fallback: true }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
     const {
      id
   } = params as IParams

  const res = await fetch(`${process.env.API_URL}`)
  const product: product[] = await res.json()
  var result = product.find((p: product) => p.id.toString() === id)
  console.log("...");
  

  return { props: { result } }
}

export default Product