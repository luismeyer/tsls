import { tools } from "@tsls/tools";

import { calcGreetingHandler } from "../server/calc-greeting-lambda";
import { greetingHandler } from "../server/greeting-lambda";

export const { buildStack, dev } = tools([
  calcGreetingHandler,
  greetingHandler,
]);
