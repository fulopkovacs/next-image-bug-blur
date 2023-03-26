import Image from 'next/image'
import {Inter} from 'next/font/google'
import { ImageSwitcher } from '@/components/ImageSwitcher'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900">
      <ImageSwitcher />
    </main>
  )
}
