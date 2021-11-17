import Head from 'next/head';
import { MainPage } from "../components/atomic/templates/MainPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxwell Laner</title>
        <meta
          name="description"
          content="Maxwell Laner é um desenvolvedor Full Stack
            com conhecimentos sólidos no Ecossistema JavaScript, apaixonado
            por código e desafios e comprometido com a qualidade de seu trabalho."></meta>
      </Head>
      <MainPage />
    </>
  )
}
