import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Head from 'next/head'

const schela = 
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
const Index = () => {
  return (
    <Layout pageTitle="Anis' First Website!">
<Head>
<meta name="google-site-verification" content="XQnwHA4rdPUdCvUOlMP-JDkVltW75rlgA1k9NcMGCjw" />
<script type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(schela) }}>

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
