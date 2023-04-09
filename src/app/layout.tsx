import "~/styles/globals.css";


export const metadata = {
    title: 'Create T3 App',
    description: 'Welcome to Next.js',
    // <link rel="icon" href="/favicon.ico" />
  };



export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        {/* <NavBar /> */}
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
      </html>
    );
  }