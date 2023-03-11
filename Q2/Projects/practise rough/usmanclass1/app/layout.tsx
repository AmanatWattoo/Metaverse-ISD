import Footer from "@/components/Footer"
import ChakraWrapper from "../components/chakra"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <h1 className="text-3xl font-extrabold underline">Welcome to my Todo App</h1>
      </head>
      <body><ChakraWrapper>{children}
      <Footer/>
      </ChakraWrapper>
      </body>
      
    </html>
  )
}