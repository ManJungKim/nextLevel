/* file_name : _app.jsx
 * desc : 제일 먼저 실행되며 레이아웃을 잡거나 공통 로직을 처리할 때 사용할 수 있다.

  _app.js는 client에서 띄우길 바라는 전체 컴포넌트의 레이아웃으로 이해하면 쉽습니다.
  공통 레이아웃 이므로 최초에 실행되어 내부에 들어갈 컴포넌트들을 실행합니다.
  1. 지속적으로 띄울 레이아웃
  2. 페이지를 탐색 할 때 상태 유지
  3. componentDidCatch를 사용하여 사용자 정의 오류 처리
  4. 추가 데이터를 페이지에 주입
  5. 글로벌 CSS 추가
 */
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