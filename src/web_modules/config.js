import prod from "./config.prod";
import dev from "./config.dev";

let config;

if (process.env.NODE_ENV === "production") {
  config = prod;
} else {
  config = dev;
}

export default config;
