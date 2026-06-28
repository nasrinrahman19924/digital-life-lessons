import Stripe from "stripe";
import { getCollections } from "@/lib/collections";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const { email } = body;

    if (!email) {
      return Response.json(
        {
          success: false,
          message: "User email is required.",
        },
        { status: 400 }
      );
    }

    const { users } = await getCollections();

    const user = await users.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    if (user.isPremium) {
      return Response.json(
        {
          success: false,
          message: "You are already a Premium member.",
        },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",

      customer_email: email,

      metadata: {
        email,
      },

      line_items: [
        {
          price_data: {
            currency: "bdt",

            product_data: {
              name: "Digital Life Lessons Premium",
              description: "Lifetime Premium Membership",
            },

            unit_amount: 150000, // ৳1500 = 150000 paisa
          },

          quantity: 1,
        },
      ],

      success_url: `${process.env.BETTER_AUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${process.env.BETTER_AUTH_URL}/payment/cancel`,
    });

    return Response.json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}