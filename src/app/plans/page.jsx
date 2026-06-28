"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

import {
  Check,
  CircleQuestion,
  ChevronDown,
  Star,
  CrownDiamond,
} from "@gravity-ui/icons";

export default function PricingPage() {
  const { data, isPending } = useSession();

  const router = useRouter();

  const user = data?.user;

  const [loading, setLoading] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/auth/signin");
    }
  }, [user, isPending]);
  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = data.url;
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const faqs = [
    {
      question: "Is this lifetime access?",

      answer: "Yes. You only pay once and enjoy Premium forever.",
    },

    {
      question: "Can I create Premium lessons?",

      answer: "Yes. Premium members can publish Premium lessons.",
    },

    {
      question: "Can I cancel payment?",

      answer:
        "Yes. Stripe allows secure payment cancellation before completion.",
    },

    {
      question: "What happens after payment?",

      answer:
        "After successful payment your account automatically becomes Premium.",
    },
  ];
  const features = [
    {
      name: "Create Free Lessons",

      free: "Unlimited",

      premium: "Unlimited",
    },

    {
      name: "Create Premium Lessons",

      free: "❌",

      premium: "✅",
    },

    {
      name: "Access Premium Lessons",

      free: "❌",

      premium: "✅",
    },

    {
      name: "Ad Free Experience",

      free: "❌",

      premium: "✅",
    },

    {
      name: "Priority Listing",

      free: "❌",

      premium: "✅",
    },

    {
      name: "Verified Badge",

      free: "❌",

      premium: "⭐",
    },

    {
      name: "Community Badge",

      free: "❌",

      premium: "Premium",
    },

    {
      name: "Lifetime Membership",

      free: "❌",

      premium: "✅",
    },
  ];
  if (user?.isPremium) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">⭐ Premium Activated</h1>

          <p className="mt-4 text-gray-500">
            Thank you for supporting Digital Life Lessons.
          </p>
        </div>
      </div>
    );
  }
  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto py-20 px-5">
        <div className="text-center">
          <h1 className="text-6xl font-black">Lifetime Premium</h1>

          <p className="text-gray-400 mt-5 text-lg">
            Unlock every lesson and create Premium content.
          </p>
        </div>
        <div className="max-w-md mx-auto mt-16 rounded-3xl border border-zinc-800 p-10 bg-zinc-900">
          <div className="flex justify-center">
            <CrownDiamond className="text-yellow-400" />
          </div>

          <h2 className="text-center text-4xl font-bold mt-4">Premium</h2>

          <p className="text-center mt-2">One Time Payment</p>

          <h1 className="text-center text-6xl font-black mt-8">৳1500</h1>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-10 w-full bg-violet-600 py-4 rounded-xl font-bold"
          >
            {loading ? "Redirecting..." : "Upgrade To Premium"}
          </button>
        </div>
        <div className="mt-24">
          <h2 className="text-center text-4xl font-bold mb-10">
            Free vs Premium
          </h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Feature</th>

                  <th>Free</th>

                  <th>Premium</th>
                </tr>
              </thead>

              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>

                    <td>{item.free}</td>

                    <td>{item.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Premium Features */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center">Why Upgrade?</h2>

          <p className="text-center text-gray-400 mt-3">
            Unlock all premium features forever.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold">Unlimited Lessons</h3>

              <p className="text-gray-400 mt-3">
                Create unlimited public and premium lessons.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold">Premium Content</h3>

              <p className="text-gray-400 mt-3">
                Access every premium lesson shared by the community.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold">No Ads</h3>

              <p className="text-gray-400 mt-3">
                Enjoy an ad-free reading experience.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold">Premium Badge</h3>

              <p className="text-gray-400 mt-3">
                Stand out with a verified Premium badge.
              </p>
            </div>
          </div>
        </div>
        {/* FAQ */}

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5 mt-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-zinc-900"
                >
                  <span className="font-semibold">{faq.question}</span>

                  <ChevronDown
                    className={`transition-all duration-300

${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>

                {openFaq === index && (
                  <div className="p-5 text-gray-400">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}

        <div className="mt-24 text-center">
          <h2 className="text-5xl font-bold">Ready to Become Premium?</h2>

          <p className="text-gray-400 mt-4">One payment. Lifetime access.</p>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="mt-10 bg-violet-600 hover:bg-violet-700 transition px-10 py-5 rounded-xl font-bold text-xl"
          >
            {loading ? "Redirecting..." : "Upgrade Now"}
          </button>
        </div>
        <footer className="mt-32 border-t border-zinc-800 pt-10 pb-10 text-center">
          <p className="text-gray-500">© 2026 Digital Life Lessons</p>
        </footer>
      </div>
    </div>
  );
}
