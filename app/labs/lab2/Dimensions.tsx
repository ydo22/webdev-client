export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box is declared 120px wide and 60px tall, so this long
          sentence wraps and spills past the yellow background
        </div>
        <div className="wd-dimension-square wd-bg-color-yellow">Long sentence to test if the dimensions are working correctly</div>
      </div>
    </div>
  );
}