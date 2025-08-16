'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        <div className="flex items-center gap-4">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <img src="/xuanhoa_logo.svg" alt="Xuân Hòa Logo" className="h-12 sm:h-16 w-auto" />
          </Link>
          <div>
            <Link href="/" className="text-lg sm:text-xl font-medium text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
              Nội Thất Xuân Hòa
            </Link>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-sm sm:text-base text-zinc-600 dark:text-zinc-500"
              delay={0.5}
            >
              Tiêu chuẩn Quốc Tế - Giá trị Bền Lâu
            </TextEffect>
          </div>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/#products" 
            className="text-sm sm:text-base font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Sản phẩm
          </Link>
          <Link 
            href="/#projects" 
            className="text-sm sm:text-base font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            Dự án
          </Link>
          <Link 
            href="/#contact" 
            className="text-sm sm:text-base font-medium px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300 rounded-lg transition-colors"
          >
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  )
}
