import Script from 'next/script'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WXES529WYF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WXES529WYF');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
