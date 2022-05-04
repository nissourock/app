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

<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "LocalBusiness",
  "name" : "Anis Si Bachir",
  "telephone" : "0658 02 30 44",
  "email" : "anisdemi@outlook.fr",
  "address" : {
    "@type" : "PostalAddress",
    "addressLocality" : "Alger",
    "addressCountry" : "Algérie"
  }
}
</script>

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
