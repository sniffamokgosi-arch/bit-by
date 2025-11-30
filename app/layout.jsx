import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'TRACKS ADVENTURE SAFARIS & LODGES'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
