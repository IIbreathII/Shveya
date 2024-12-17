import '$style/globals.css'
import Header from '$component/header'

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <head>
        <title>Horizon</title>
        <meta name="description" content="Platform for maximum effective language learning" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="language learning, education, platform" />
        <meta name="author" content="Blossom team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </head>

      <body>
        <div className='wrapper'>
          <Header></Header>
          <main>{children}</main>
        </div>
      </body>
    </html>

  );
}
