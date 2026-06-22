import Link from "next/link";

import { FaFacebook, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t py-16">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-bold text-3xl">Digital Life Lessons</h2>

          <p className="mt-3 text-slate-500">
            Preserve wisdom. Share experiences. Grow together.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <div className="space-y-2">
            <Link href="/">Home</Link>

            <br />

            <Link href="/public-lessons">Public Lessons</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>

          <div className="space-y-2">
            <Link href="/terms">Terms</Link>

            <br />

            <Link href="/privacy">Privacy</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebook />

            <FaXTwitter />

            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-5 text-center text-sm text-slate-500">
        © 2026 Digital Life Lessons
      </div>
    </footer>
  );
}
