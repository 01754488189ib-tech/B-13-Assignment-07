"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HashLoader } from "react-spinners";

export default function Home() {
  const router = useRouter();
  const targetLink = "/blog";

  useEffect(() => {
    router.push(targetLink);
  }, [router]);

  return (
    <div className="p-4">
      <Link
        href={targetLink}
        className= "flex justify-center items-center h-screen">
        <HashLoader />
      </Link>
    </div>
  );
}