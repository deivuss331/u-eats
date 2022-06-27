import { loadStripe } from '@stripe/stripe-js';

const { REACT_APP_STRIPE_PUBLISHABLE_KEY } = process.env;

if (!REACT_APP_STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Missing Stripe publishable key!');
}

export default loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY);
