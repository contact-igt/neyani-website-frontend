---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal. If there's any information in your memory about the client's preferences or context about what they're building, use that as a hint. The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from — a design for a toy for girls aged 8–11 will be very aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy and placeholder content. Copy can make a design feel as templated as the design itself.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. A warm cream background (near #F4F1EA) with a headline that uses 2–3 colors
2. An animated gradient blob behind the hero headline
3. Cards with a white background and subtle drop shadow
4. Testimonials or social proof with a row of circular avatar images
5. A footer with a dark background that has a centered logo and links in columns
6. A color palette with a bright accent on a neutral base
7. A section with three columns of icons
8. Accenting a single word or phrase in a gradient

Actively avoid all of these unless they are the ideal choice for this specific brief. There's nothing wrong with any of these patterns per se, but they are so ubiquitous in AI-generated design that using any of them without a good reason will mark the output as generic.

## Thinking process

Before writing any code, spend time in a `<parameter name="thinking">` block to:
1. Identify the subject matter (industry/product/audience)
2. Identify 3 possible aesthetic directions, each quite different
3. Choose one and explain why it fits the subject better than the alternatives
4. List the specific decisions (palette with hex codes, typefaces, structural approach, motion approach) that will distinguish this design from the generic defaults

## Critique and revise

After building the design, review it critically:
- Does it avoid all 8 generic patterns listed above?
- Does the typography feel like it was chosen for this project specifically?
- Is the palette distinctive and appropriate for the subject?
- Would someone mistake this for another AI-generated page?
- Does every structural element (border, divider, label) encode real information?

If the answer to any of these questions suggests the design is generic, revise before presenting.

## Writing

Good copy is short, specific, and never describes how great the product is. It shows what the product does, for whom, and why it matters — then gets out of the way.

Common patterns to avoid:
- Starting paragraphs with "Whether you're..." or "In today's..."
- Benefits bullets that start with "Streamline...", "Empower...", "Leverage...", "Unlock..."
- Taglines like "Where [noun] meets [other noun]"
- Using "seamless", "robust", "scalable", "cutting-edge", "innovative", "revolutionize"

Write section headers that say what the section is, not just label the type of section ("Your career in data" instead of "About us", "What gets built" instead of "Features").

## Color

When choosing a palette:
- Start from the subject, not from a generic color mood ("tech = blue", "finance = dark green")
- Use OKLCH for constructing harmonious palettes
- Avoid pure black (#000) and pure white (#fff); use very dark and very light tints of the brand hue instead
- Test the palette at multiple contrast levels to ensure accessibility

## Accessibility

Ensure:
- All text passes WCAG AA contrast against its background (4.5:1 for normal text, 3:1 for large text)
- Avoid using color alone to communicate information
- All interactive elements are reachable by keyboard
- All images have alt text

## Avoiding cookie-cutter components

When reaching for a component pattern, ask: is this the best way to present this specific content, or is it just the first component that came to mind?

Some overused patterns and what to consider instead:
- **Three-column icon grid**: Good for truly parallel, distinct features. Often just breaks up content that would flow better as prose.
- **Full-bleed hero with centered headline over image**: Effective for photography-led brands. Generic for tech products.
- **Alternating left-right content sections**: Fine for complex features. Can feel padded out if the content is thin.
- **Testimonial grid with avatars**: Good for social proof, but a single compelling quote can land harder than a grid of five.
- **Pricing table**: Almost always the right format for pricing. Make sure tier names and feature descriptions are genuinely different from competitors'.

Source: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
