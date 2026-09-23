export default function HeadingTags() {
  return (
    <>
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
    </div>
    <div id="wd-ai-headings">
      <h4>Lab notes</h4>
      This outline shows how a heading and its subheadings nest inside a single
      section. Each level below introduces a narrower topic than the one above
      it.
      <h5>What I built</h5>
      A short summary of the work would go here, describing the pages that were
      created and the tags that were practiced along the way.
      <h6>Next step</h6>
      A sentence at the smallest heading level, noting whatever comes after the
      current section is finished.
    </div>
    <div id="wd-your-heading">
        <h4>Shankul Upadhyay</h4>
        Hello, my name is Shankul Upadhyay. I am 23 years old. <span id="wd-your-span">I am currently
        pursuing a Masters in Computer Science degree at Northeastern University.</span>
    </div>
    </>
  );
}