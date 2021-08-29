import Twitter from "twitter";
import assert from "assert";

assert(process.env.TWITTER_API_KEY, "TWITTER_CONSUMER_KEY is not set");
assert(
  process.env.TWITTER_API_SECRET_KEY,
  "TWITTER_CONSUMER_SECRET is not set"
);
assert(process.env.ACCESS_TOKEN, "TWITTER_ACCESS_TOKEN is not set");
assert(
  process.env.ACCESS_SECRET_TOKEN,
  "TWITTER_ACCESS_TOKEN_SECRET is not set"
);

const client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET_TOKEN,
});
