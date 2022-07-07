import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import FurnishopLogo from '../public/furnishop-logo.png'
import SearchIcon from '../public/search.png'
import MoreIcon from '../public/more.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      
      <main className={`flex flex-col bg-red-300`}>
        <header className={`flex flex-col bg-pink-300`}>
          <navbar className={`flex my-8 bg-blue-200 items-center`}>
            <ul className={`flex flex-row bg-yellow-300 px-24 justify-between items-center w-full`}>
              <li>
                <Image
                  src={FurnishopLogo}
                  width={`133`}
                  height={`37`}
                >
                </Image>
              </li>
              <li className={`w-3/6`}>
                <ul className={`flex flex-row justify-around w-full font-monts font-medium text-blacko2 bg-red-600`}>
                  <Link href={`#`}>
                    <a>
                      <li>Home</li>
                    </a>
                  </Link>
                  <Link href={`#`}>
                    <a>
                      <li>About</li>
                    </a>
                  </Link>
                  <Link href={`#`}>
                    <a>
                      <li>Features</li>
                    </a>
                  </Link>
                  <Link href={`#`}>
                    <a>
                      <li>Contact</li>
                    </a>
                  </Link>
                </ul>
              </li>
              <li>
                <ul className={`flex flex-row gap-11`}>
                  <li>
                    <Image
                      src={SearchIcon}
                      width={`20`}
                      height={`20`}
                      className={`cursor-pointer`}
                    >
                    </Image>
                  </li>
                  <li>
                    <Image
                      src={MoreIcon}
                      width={`19`}
                      height={`14`}
                      className={`cursor-pointer`}
                    >
                    </Image>
                  </li>
                </ul>
              </li>
            </ul>
          </navbar>
          <div className={`bg-green-200`}>
            Ici suite du header
          </div>
        </header>
        <section1 className={``}>
          
        </section1>
        <section2 className={``}>
          
        </section2>
        <section3 className={``}>
          
        </section3>
        <section4 className={``}>
          
        </section4>
        <footer className={styles.footer}>

        </footer>
      </main>
    </div>
  )
}
