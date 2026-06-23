import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: "Premium Plan",
            },

            unit_amount: 500,
          },

          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: "http://localhost:3000/payment/success",

      cancel_url: "http://localhost:3000/payment/cancel",
    });

    return Response.json({
      url: "/payment/success",
    });
  } catch (error) {
    return Response.json({
      message: error.message,
    });
  }
}
