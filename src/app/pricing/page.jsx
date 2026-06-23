"use client";

export default function PricingPage() {
  const handlePayment = async () => {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-5xl font-bold text-center">Upgrade To Premium</h1>

      <div className="max-w-md mx-auto mt-16 border rounded-3xl p-10 text-center">
        <h2 className="text-4xl font-bold">Premium Plan</h2>

        <h3 className="text-6xl font-bold mt-6">
          $9
          <span className="text-lg">/month</span>
        </h3>

        <ul className="space-y-3 mt-8">
          <li>✅ Unlimited Lessons</li>

          <li>✅ Premium Badge</li>

          <li>✅ Priority Access</li>

          <li>✅ Advanced Dashboard</li>
        </ul>

        <button
          onClick={handlePayment}
          className="mt-10 bg-violet-600 text-white px-8 py-4 rounded-2xl"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}
