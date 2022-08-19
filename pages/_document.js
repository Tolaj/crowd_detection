import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>

      <link href="buttonStyle.css" rel="stylesheet" type="text/css"/>
      
        
    
      </Head>
      <body >
        
        <Main/>
        <NextScript />
        <script src="heatMap.js" type="text/javascript"></script>
        <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
      </body>
    </Html>
  )
}