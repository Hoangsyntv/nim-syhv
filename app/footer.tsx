'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

import { Mail, ShoppingBag, Phone, MapPin, Shield, FileText, Truck, RefreshCw, CreditCard, Lock, Facebook, MessageCircle, Youtube, Music } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const POLICIES = [
  {
    name: 'Chính sách vận chuyển',
    href: '/chinh-sach-van-chuyen',
    icon: <Truck className="h-4 w-4 text-blue-600" />
  },
  {
    name: 'Chính sách bảo hành',
    href: '/chinh-sach-bao-hanh',
    icon: <Shield className="h-4 w-4 text-blue-600" />
  },
  {
    name: 'Chính sách đổi trả hàng',
    href: '/chinh-sach-doi-tra',
    icon: <RefreshCw className="h-4 w-4 text-blue-600" />
  },
  {
    name: 'Chính sách thanh toán',
    href: '/chinh-sach-thanh-toan',
    icon: <CreditCard className="h-4 w-4 text-blue-600" />
  },
  {
    name: 'Chính sách bảo mật',
    href: '/chinh-sach-bao-mat',
    icon: <Lock className="h-4 w-4 text-blue-600" />
  }
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Nội thất Xuân Hòa */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-5">
              <Link href="/" className="block w-40 transition-opacity hover:opacity-80">
                <Image
                  src="/xuanhoa_logo.svg"
                  alt="Nội thất Xuân Hòa"
                  width={160}
                  height={60}
                  className="dark:invert"
                />
              </Link>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  NỘI THẤT XUÂN HÒA
                </Link>
              </h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">Liên hệ với chúng tôi qua email:</p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:Xuanhoa.sale@gmail.com" className="hover:text-blue-600 transition-colors">
                    Xuanhoa.sale@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <a href="https://www.xuanhoa.net.vn" 
                   className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <ShoppingBag className="h-5 w-5 text-blue-600" />
                  www.xuanhoa.net.vn
                </a>
              </li>
              <li>
                <a href="tel:0833676688" 
                   className="flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  08 3367 6688
                </a>
              </li>
            </ul>
          </div>

          {/* Chính sách */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Chính sách</h3>
            <ul className="space-y-3.5 text-sm">
              {POLICIES.map((policy) => (
                <li key={policy.name}>
                  <Link 
                    href={policy.href}
                    className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    {policy.icon}
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Phân phối tại Hà Nội */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phân phối tại Hà Nội</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
                <div>
                  <p>69 Tố Hữu - Vạn Phúc - Hà Đông - Hà Nội</p>
                  <p className="mt-2">Nhà số 46 Galaxy 3 - Ngân Hà Vạn Phúc</p>
                </div>
              </li>
              <li>
                <a 
                  href="https://g.page/noithatxuanhoa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  Xem trên Google Maps
                </a>
              </li>
            </ul>

            {/* Logo Bộ Công Thương */}
            <div className="mt-6">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/logoCCDV.png"
                  alt="Chứng nhận của Bộ Công Thương"
                  width={150}
                  height={57}
                  className="transition-opacity hover:opacity-80"
                />
              </a>
            </div>
          </div>

          {/* Mạng xã hội */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Kết nối</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a 
                  href="https://facebook.com/noithatxuanhoa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors group"
                >
                  <Facebook className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://zalo.me/0833676688" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  Zalo
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@noithatxuanhoa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-blue-600" />
                  YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@noithatxuanhoa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <Music className="h-5 w-5 text-blue-600" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Nội thất Xuân Hòa. All rights reserved.
          </p>
          <div className="text-sm text-zinc-400">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  )
}
