export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        A paragraph tag marks its contents as a block, so the browser places it
        on its own line instead of running the text together. Default browser
        styles then add a margin above and below that block, which is the
        vertical gap you see between paragraphs.
      </p>
      <p id="wd-p-your-1">
        I was born in Gujarat, India. However, I lived in Abu Dhabi, UAE for most of my life.
        I then went to Singapore for my undergraduate studies. It rained quite a lot in Singapore.
      </p>
      <p id="wd-p-your-2">
        In this course, I want to learn more about Typescript and React. I would also like to strengthen
        my understanding of CSS and other types of styling, as I believe that is where I am weakest when
        it comes to web app development.
      </p>
    </div>
  );
}