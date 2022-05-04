import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Head from 'next/head'
const Index = () => {
  return (
    <Layout pageTitle="Anis' First Website!">
<Head>



</Head>
      <Header />
      <Hero />
      <Feature/>
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}
export default Index;
