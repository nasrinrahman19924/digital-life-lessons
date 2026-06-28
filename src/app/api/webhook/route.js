import Stripe from "stripe";
import { headers } from "next/headers";
import { getCollections } from "@/lib/collections";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();

  const signature = (await headers()).get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Webhook Error:", err.message);

    return Response.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 400,
      },
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      const email = session.metadata?.email;

      if (!email) {
        console.log("Email not found in metadata.");
        break;
      }

      const { users } = await getCollections();

      await users.updateOne(
        {
          email,
        },
        {
          $set: {
            isPremium: true,
          },
        },
      );

      console.log(`${email} upgraded to Premium.`);

      break;
    }

    default:
      console.log(`Unhandled event: ${event.type}`);
  }

  return Response.json({
    received: true,
  });
}
