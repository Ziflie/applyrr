import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" font-main flex flex-wrap justify-end pb-24 pt-6 ">
      <h1 className="text-white"></h1>
      <Link href="/about">
        <a className="text-black px-6">About</a>
      </Link>
      <Link href="/faq">
        <a className="text-black px-6">FAQ</a>
      </Link>
    
      <div className="bg-red-500 rounded-full">
        <Link href="/form">
          <a className="text-white px-6">Post a vacancy</a>
        </Link>
      </div>
    </nav>
  );
}
