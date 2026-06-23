import Link from "next/link";

export default function PricingCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl border p-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold">৳1500</h2>

        <p className="text-gray-500 mt-2">Lifetime Premium Access</p>
      </div>

      <div className="mt-10 space-y-5">
        <div>✅ Unlimited Lesson Creation</div>

        <div>✅ Create Premium Lessons</div>

        <div>✅ Access Premium Content</div>

        <div>✅ Verified Premium Badge</div>

        <div>✅ Ad Free Experience</div>

        <div>✅ Priority Listing</div>

        <div>✅ Premium Community Access</div>
      </div>

      <button className="w-full h-14 bg-violet-600 text-white rounded-2xl mt-10 font-bold">
        Upgrade To Premium ⭐
      </button>
    </div>
  );
}
