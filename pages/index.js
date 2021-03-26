import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='content' keywords='Ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          dolore natus expedita doloribus laborum totam quibusdam veniam in
          deserunt eum?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          dolore natus expedita doloribus laborum totam quibusdam veniam in
          deserunt eum?
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
