export function ExplorePrompt({ progress }) {
  const opacity = Math.min(
    1,
    Math.max(
      0,
      (progress - 0.75) / 0.2
    )
  );

  const translateY = 20 - opacity * 20;

  return (
    <div
      className="explore-prompt"
      style={{
        opacity,
        transform: `translate(-50%, ${translateY}px)`,
      }}
    >


      <h2> Explore</h2>

      <div className="controls-hint">

        <span>Zoom</span>
        <span>Rotate</span>
      </div>
    </div>
  );
}