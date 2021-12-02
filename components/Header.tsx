
import { useRouter } from 'next/router'
import { type } from 'os'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/images/logo.png'

type mainNav = {
  display: string, 
  path: string
}

const style = {
  margin: '0 auto',
  width: '100%',
}


const mainNavTop = [
  {
    display: 'NEED SUPPORT?',
    path: '/support'
  },
  {
    display: 'FAQ',
    path: '/faq'
  },
  {
    display: 'BLOG',
    path: '/blog'
  },
  {
    display: 'ABOUT US',
    path: '/about-us'
  },
]

const mainNavBottom = [
  {
    display: 'FEATURED'
  },
  {
    display: 'M2 EXTENSIONS'
  },
  {
    display: 'MARKETPLACE'
  },
  {
    display: 'NEW FREE'
  },
  {
    display: 'THEMES'
  },
  {
    display: 'DEAL & PACKAGE'
  },
  {
    display: 'SERVICES'
  },
  {
    display: 'SUPPORT'
  },
]
const Header= ( {mainsNav}:any) =>{
  const router = useRouter()
  

  return (
    <div>
      {
        mainsNav ?
          (
            <div className="header">
              <div className="header_top flex justify-between text-xs bg-black text-white pt-2 pb-2 ">
                <div className="container flex justify-between" style={style}>
                  <div className="flex">
                    {
                      mainNavTop.map((item: any, index: number) => (
                        <div key={index} className="mr-4">
                          <Link href={item.path}>
                            {item.display}
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                  <div className="flex">
                    <div className="ml-3">                    
                        <i className="bx bx-user"/>  MY ACCOUNT
                    </div>
                    <div className="ml-3">
                        <i className="bx bx-cart"/> MY CART
                    </div>
                  </div>
                </div>
              </div>
              <div className="header_center"> 
                <div className="container pt-3 pb-3 flex justify-between" style={style}>
                  <div>
                    <Image src={logo} alt="logo" />  
                  </div>
                  <div className="flex pt-3">
                    <div className="flex mr-20">
                      <div className="text-2xl leading-10">
                        <i className='bx bx-shield-quarter' /> 
                      </div>
                      <div className="text-xs">
                        <div>
                          30 DAYS
                        </div>
                        <div className="text-gray-400">
                          MONEY BACK
                        </div>
                      </div>
                    </div>
                    <div className="flex mr-20">
                      <div className="text-2xl leading-10">
                        <i className='bx bx-shield-quarter' /> 
                      </div>
                      <div className="text-xs">
                        <div>
                          FREE 6 MONTHS
                        </div>
                        <div className="text-gray-400">
                          SUPPORT
                        </div>
                      </div>
                    </div>
                    <div className="flex mr-20">
                      <div className="text-2xl leading-10">
                        <i className='bx bx-refresh'></i>
                      </div>
                      <div className="text-xs">
                        <div>
                          LIFETIME
                        </div>
                        <div className="text-gray-400">
                          UPDATE
                        </div>
                      </div>
                    </div>
                    <div>
                      <form action="" className="relative">
                        <input className="rounded-2xl border-2 h-8 w-48 border-black p-2 " type="text" placeholder=' Search here...' />
                        <div className="absolute top-1 right-4 cursor-pointer text-lg">
                          <i className="bx bx-search"></i>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 header_bottom" >
                <div className="container cursor-pointer" style={style}>
                  <div style={{ height: '42px', lineHeight: '42px' }} className="flex">
                    {
                      mainNavBottom.map((item: any, index: number) => (
                        <div key={index} className="mr-12">{ item.display} </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          )                                                                         
        : router.push('/404')
      }
    </div>
  )
}

export default Header
