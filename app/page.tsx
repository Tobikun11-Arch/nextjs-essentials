import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-3/5">
        <h1 className="text-4xl font-bold text-center">Nextjs Essentials</h1>
        <p>
        A collection of best practices, patterns, and optimizations for building high-performance and scalable Next.js applications. This repository covers caching strategies, API handling, component structuring, server-side rendering (SSR), static site generation (SSG), and more to help you write clean, efficient, and maintainable Next.js code.
        </p>

        <div className="mt-12 flex flex-col gap-1">
          <h4 className="text-2xl font-bold">Files Directory</h4>
          <Link href="/ServerSide" className="text-blue-500 mt-5">Server Side Rendering</Link>
          <Link href="/React_Query" className="text-blue-500">React Query</Link>
        </div>
      </div>
    </div>
  )
}