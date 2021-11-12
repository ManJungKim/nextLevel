import Head from 'next/head'
import Layout from '../components/common/layout'
import Container from '../components/common/Container'
import TopHeader from '../components/common/TopHeader'
import Sidebar from '../components/common/sidebar'
import Footer from '../components/common/footer'

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" /> {/* 문자 코드의 종류 설정 */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
          <title>Studying Next</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <TopHeader />
          <Sidebar />
          <Container>
          <Component {...pageProps} />
          </Container>
          <Footer />
        </Layout>
      </>
    );
  }
export default MyApp;