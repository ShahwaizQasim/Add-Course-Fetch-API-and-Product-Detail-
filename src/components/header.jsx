import Link from "next/link";

function Header() {
  return (
    <>
      <div className="header">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/posts">Products</Link>
      </div>
    </>
  );
}

export default Header;
