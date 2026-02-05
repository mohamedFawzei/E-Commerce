import Link from "next/link";

export default function AuthFooter() {
  return (
    <footer className="w-full border-t border-gray-200 mt-5 py-5 bg-white/0 mb-5">
      <div className="flex flex-col items-center gap-2 max-w-[350px] mx-auto">
        <div className="flex gap-4 text-[11px] text-blue-600">
          <Link href="#" className="hover:text-[#c45500] hover:underline">
            Conditions of Use
          </Link>
          <Link href="#" className="hover:text-[#c45500] hover:underline">
            Privacy Notice
          </Link>
          <Link href="#" className="hover:text-[#c45500] hover:underline">
            Help
          </Link>
        </div>
        <p className="text-[11px] text-gray-500 mt-2">
          &copy; {new Date().getFullYear()} omnibuy.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}
