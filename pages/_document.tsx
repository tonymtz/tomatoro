import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
  return (
    <Html>
      <Head/>
      <body>
        <Main/>
        <NextScript/>

        {/* Global site tag (gtag.js) - Google Analytics */ }
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8QCWR3HW6V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          { `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8QCWR3HW6V');
        ` }
        </Script>
      </body>
    </Html>
  )
}
