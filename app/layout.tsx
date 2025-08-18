import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL('https://xuanhoa.net.vn/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Nội Thất Xuân Hòa - Nhà sản xuất nội thất hàng đầu Việt Nam',
    template: '%s | Nội Thất Xuân Hòa'
  },
  description: 'Nội thất Xuân Hòa tự hào là một trong những doanh nghiệp hàng đầu Việt Nam về tư vấn, thiết kế và sản xuất trang thiết bị nội thất. Những huân chương cao quý và giải thưởng uy tín là minh chứng cho nỗ lực của chúng tôi.',
  keywords: ['nội thất', 'nội thất xuân hòa', 'nội thất văn phòng', 'nội thất gia đình', 'bàn ghế', 'tủ tài liệu', 'nội thất cao cấp'],
  authors: [{ name: 'Nội Thất Xuân Hòa' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#ffffff',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://xuanhoa.net.vn/',
    siteName: 'Nội Thất Xuân Hòa',
    title: 'Nội Thất Xuân Hòa - Nhà sản xuất nội thất hàng đầu Việt Nam',
    description: 'Nội thất Xuân Hòa tự hào là một trong những doanh nghiệp hàng đầu Việt Nam về tư vấn, thiết kế và sản xuất trang thiết bị nội thất. Những huân chương cao quý và giải thưởng uy tín là minh chứng cho nỗ lực của chúng tôi.',
    images: [
      {
        url: 'https://xuanhoa.net.vn/Images/xuan-hoa1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nội Thất Xuân Hòa - Nhà sản xuất nội thất hàng đầu Việt Nam',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nội Thất Xuân Hòa - Nhà sản xuất nội thất hàng đầu Việt Nam',
    description: 'Nội thất Xuân Hòa tự hào là một trong những doanh nghiệp hàng đầu Việt Nam về tư vấn, thiết kế và sản xuất trang thiết bị nội thất.',
    images: ['https://xuanhoa.net.vn/Images/xuan-hoa1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter)]">
            {/* Sticky Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950/80">
              <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <Header />
              </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 w-full mt-24 sm:mt-28">
              <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>

            {/* Footer */}
            <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
              <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
