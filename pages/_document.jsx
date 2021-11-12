import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="My First Static Website"/>
                    <meta name="robots" content="index, follow" />	 {/* 검색 로봇 제어 */}
                    <meta httpEquiv="X-UA-Compatible" content="IE-edge" />	  {/* 브라우저 호환성 지정 */}
                    <meta name="keywords" content="deerox,fantastic,website,gorgeous,beautiful" /> {/* 검색 엔진에 의해 검색되는 단어 지정 */}
                    <meta name="Description" content="deerox, My First Static Website" /> {/* 검색 결과에 표시되는 문자를 지정 */}
                    <meta httpEquiv="Expires" content="Mon,  08 Sep 2022 10:10:10 GMT" />{/* Expires (캐쉬 만료일) */}
                    <meta httpEquiv="imagetoolbar" content="no" /> {/* (그림 위 마우스 오버 시 이미지 관련 툴바 생기지 않게 하기) */}
                    <meta httpEquiv="Cache-Control" content="no-cache" /> {/* (캐쉬가 되지 않도록 하기) */}
                    <meta httpEquiv="Pragma" content="no-chche" /> {/* (캐쉬가 되지 않도록 하기) */}
                    <meta httpEquiv="refresh" content="9999" />	 {/* 초 마다 새로고침 */}
                    {/* <meta http-equiv="refresh" content="9999; url = www.naver.com" /> (입력한 주소로 초 후 이동) */}
                    {/* <meta http-equiv="refresh" content="revealtrans(Duration=1, Transition=12)" /> (페이지 들어갈 때 장면 전환 효과) */}

                    <meta httpEquiv="Subject" content="deeroxNET" />	  {/* 홈페이지 주제 지정 */}
                    <meta httpEquiv="Author" content="deerox" />	  {/* 페이지 작성 제작자명 */}
                    {/* <meta httpEquiv="Title" content="Studying Next" />	  제목 지정 */}
                    <meta httpEquiv="publisher" content="deerox" />	 {/* 제작사 */}
                    <meta httpEquiv="Other Agent" content="deerox999" />	 {/* 웹 책임자 */}
                    <meta httpEquiv="Generator" content="Visual Studio Code" />	 {/* 제작 도구 */}
                    <meta httpEquiv="Reply-To" content="deerox999@gmail.com" />       {/* 응답 주소 */}
                    <meta httpEquiv="Email" content ="deerox999@gmail.com" />     {/* 이메일 주소 */}
                    <meta httpEquiv="Filename" content="index.jsx" />	{/* 파일 이름 */}
                    <meta httpEquiv="Location" content="south korea, seoul" /> {/* 위치 */}
                    <meta httpEquiv="Distribution" content="deerox999" /> {/* 배포자 */}
                    <meta httpEquiv="Copyright" content="deerox999" /> {/* 저작권소유자 */}
                    <meta httpEquiv="Build" content="date" /> {/* (제작 년, 월, 일) */}
                    <meta httpEquiv="Last-Modified" content="Fri, 05 Jul 2021 19:40:40" /> {/* (제작 년, 월, 일) */}
                    <meta httpEquiv="Content-Script-Type" content="Text/javascript" />	 {/* 웹페이지에 쓰인 언어 지정 */}
                    <meta name="Date" content="2021-11-10T09:45:37+09:00" />	  {/* 날짜(제작일) */}

                    <style jsx global>
                        {`
                            html, body, #__next {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                                padding-top: 15px;
                                padding-left: 10px;
                                padding-right: 10px;
                            }
                            
                            body {
                                padding: 0 0.2rem;
                                margin: 0;
                                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                                  sans-serif;
                              }

                            * {
                              box-sizing: border-box;
                            }
                            
                        `}
                    </style>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}