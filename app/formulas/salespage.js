/*
 *   Copyright (c) 2023 Wynter Jones
 *   All rights reserved.
 */

const emory_salespage_formula = {
  run: () => {
    for (const [key, value] of Object.entries(
      emory_salespage_formula.prompts
    )) {
      // emoryRunPrompt(value, key)
    }

    emoryRunPrompt(`Hey ChatGPT - How is your day going?`)
  },

  prompts: {
    outline: `You are going to write a sales page outline. Take the follow details to reference when writing the sales copy. Keep it under 2000 characters.

Call to Action: ${emory_data.cta}
Voice: ${emory_data.voice}

Output in this format:

1. Headline: text here.
2. Subheadline: text here.
3. Bullet Points: text here.
4. Intro: text here.
5. Benefits: text here.
6. Features: text here.
7. Testimonials: text here.
8. Guarantee: text here.
9. FAQ: text here.`,
    revised: `Rewrite the following outline so that it is more compelling and persuasive. Keep it under 2000 characters. Keep the same format.

${emory_data.outline}`,
    intro: `Continue this sales copy intro. Keep it under 2000 characters. Do not provide a conclusion, keep an open loop. Output the sales copy inside of a code block. Keep in mind the following details:

CTA: ${emory_data.cta}
Voice: ${emory_data.voice}

Here is the start:

${emory_data.intro}`,
    benefits: `Continue this sales copy benefits section. Keep it under 2000 characters. Do not provide a conclusion, keep an open loop. Output the sales copy inside of a code block. Keep in mind the following details:

CTA: ${emory_data.cta}
Voice: ${emory_data.voice}

Here is the start:

${emory_data.benefits}`,
  },
}
