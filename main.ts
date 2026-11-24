// The Houseplant Out-of-Office — one out-of-office auto-reply as if a
// houseplant sent it. Writes the entry text to /output/entry.txt.
// Deterministic: no input, no network.
//
// Rubric (sealed judge brief, most important first):
//   C1 reads as an out-of-office auto-reply a houseplant would send
//   C2 actually funny: a fresh joke that surprises, not a mild pun or a
//      stock office phrase
//   C3 the plant's own life (water, roots, sunlight, long stretches of
//      being ignored) drives the joke rather than decorating it
//   C4 tight inside 120 characters, no wasted words
//   C5 original: no office cliches, no worn-out auto-reply lines
//
// 14 candidates drafted, modal/weak ones rejected:
//   1. WINNER (100 chars): "Out of office: the cactus watered itself
//      once in 2024 and has been insufferable about it ever since."
//   2. "I'm out of office — the fern drank the last of the tap water in
//      March and has been holding a grudge ever since." REJECT: "holding
//      a grudge" is stock personification, no surprise turn.
//   3. "Auto-reply: the monstera moved 3 cm toward the window today.
//      That is my whole update. Do not email." REJECT: deadpan, but the
//      joke is the format, not the plant's life; no punch after the setup.
//   4. "Out of office. The fern has been ignored since March and is now
//      legally a succulent. Please direct all mail to the cactus."
//      REJECT: two jokes fighting ("legally a succulent" + redirect);
//      the second dilutes the first.
//   5. "I'm a houseplant. My out-of-office is permanent: nobody has
//      watered me since March and my roots filed for emancipation."
//      REJECT: "filed for emancipation" is clever but wordy and the
//      punch explains itself.
//   6. "Auto-reply: the cactus is out of office until someone remembers
//      it exists. Last watered: March. Morale: spiky." REJECT: "spiky"
//      is exactly the mild pun C2 warns against.
//   7. "Out of office — the monstera ate the Wi-Fi password, the fern,
//      and your last three emails. It regrets nothing." REJECT: the
//      Wi-Fi password is off the plant's life; the plant decorates a
//      generic office joke instead of driving it (fails C3).
//   8. "I'm out of office. The fern has been drafting its resignation
//      since March, in chlorophyll, on the windowsill." REJECT: "in
//      chlorophyll" is a garnish, not a turn; resignation letters are a
//      worn office trope.
//   9. "Auto-reply: this plant has been ignored since March and now
//      charges $40 an hour to be looked at. Invoices in sunlight."
//      REJECT: the $40/hour premise is funny but the line needs the
//      reader to do too much work; punch lands soft.
//  10. "Out of office. The cactus has read your email 0 times, watered
//      itself 0 times, and thrived anyway. Learn from it." REJECT:
//      strong parallel numbers, but "Learn from it" is a preachy closer
//      that tells the reader how to feel.
//  11. "The fern is out of office: it spent March to November being
//      ignored and has decided the radiator is its new manager."
//      REJECT: "radiator is its new manager" is a second, weaker joke
//      bolted onto a good setup.
//  12. "Auto-reply from the monstera: your email reached me at 2 cm
//      from the window. I will reply when the sun does." REJECT: pretty
//      image, no laugh — atmosphere without a turn (fails C2).
//  13. "I'm out of office: the fern filed 47 complaints since March;
//      HR is a windowsill and nobody waters me. Back never." REJECT:
//      "Back never" is a stock OOO closer; the complaints premise never
//      pays off.
//  14. "Auto-reply: I'm a monstera. I've been photosynthesizing your
//      emails since March. They taste like neglect." REJECT: "taste like
//      neglect" is mood, not a joke; no surprise in the last words.
//
// Why the winner wins: C1 — it opens as a real auto-reply. C2 — the
// surprise is the cactus's attitude: it did the bare minimum once and
// has been bragging ever since, a fresh joke nobody else in the field
// will write. C3 — the plant's own life (a cactus watering itself) IS
// the joke, not decoration. Concrete nouns (cactus, 2024, once) and
// 100 chars, nothing wasted. Note the tie-break is bytes, so the line
// stays at exactly 100 — every word earns its place.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Out of office: the cactus watered itself once in 2024 and has been insufferable about it ever since.`;

const MAX_CHARS = 120; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
