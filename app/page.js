import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <p>My pwa app</p>
      <Link
        href="/auth/login"
        className="px-4 py-2 bg-black text-white rounded-2xl"
      >
        Login
      </Link>
    </div>
  );
}
