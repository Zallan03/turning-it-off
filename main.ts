import { mkdirSync, writeFileSync } from "node:fs";

// A hopeless tech support agent's one-line reply to a desperate customer.
// The joke: the agent's one trick has a terrible track record, and he is
// openly counting on this customer to save his statistics. v2 tightens v1:
// the plea now runs straight off the statistic on one breath (em dash),
// "it's worked" becomes "it worked", and the flat "please be my third"
// echoes "worked twice" so the punch lands without a pause.
const ENTRY =
  "Have you tried turning it off and on again? I've asked that 400 times today and it worked twice — please be my third.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
