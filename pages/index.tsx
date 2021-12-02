import type { NextPage } from 'next'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import HeroSlide from '../components/HeroSlide'


type mainNav = {
  display: string,
  path: string
}

const style = {
  margin: '0 auto',
  width: '100%',
}

function Home({ mainsNav }: InferGetStaticPropsType<typeof getStaticProps>) {
   const router = useRouter()
  const data: mainNav[] = mainsNav

  return (
    <div>
      {
        data ?
        (
          <div>
            <Header mainsNav={data} />
              <HeroSlide />
          </div>             
        )
        : router.push('/404')
      }
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const res = await fetch('http://localhost:3000/api/homeNav')
  const mainsNav: mainNav[] = await res.json()

  return { props: { mainsNav } }
}
export default Home
