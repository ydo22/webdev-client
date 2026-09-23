export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Pour your favorite cereal in a bowl, my preference is Frosted Flakes.</li>
        <li>Put a small pinch of sugar in the bowl.</li>
        <li>Pour cold milk over the cereal and enjoy.</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>Stoner</li>
        <li>Ping Pong</li>
        <li>Dramatic by Mass of the Fermenting Dregs</li>
      </ul>
      HTML tags covered in this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1 through h6 &mdash; section headings, largest to smallest.</li>
        <li>p &mdash; a paragraph of text with vertical spacing around it.</li>
        <li>ol &mdash; an ordered list, numbered in sequence.</li>
        <li>ul &mdash; an unordered list, marked with bullets.</li>
        <li>li &mdash; a single item inside an ordered or unordered list.</li>
        <li>table &mdash; tabular data arranged in rows and columns.</li>
      </ul>
    </div>
  );
}