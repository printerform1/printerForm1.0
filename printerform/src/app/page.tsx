"use client";

import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full bg-yellow-600 items-center justify-center p-24">
      <Link href="upload" className="px-4 py-2 bg-orange-500 rounded-md">Upload</Link>
    </main>
  );
};

export default Home;