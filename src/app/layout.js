import './globals.css'


export const metadata = {
  title: 'Carpal',
  description: 'Your car maintenance companion',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">{children}</body>
    </html>
  )
}
