export function Intro({ progress }) {
    const opacity = Math.max(
        0,
        1 - progress / 0.25
    );

    const translateY = progress * -40;

    return (
        <section
            className="intro"
            style={{
                opacity,
                transform: `translateY(${translateY}px)`,
            }}
        >
            <div className="intro-content">

                <p className="eyebrow">
                    dFran6 / 3D WEB EXPERIENCE
                </p>

                <h1>
                    Courage's
                    <br />
                    House
                </h1>

                <p className="intro-description">
                    A 3D recreation built with{" "}
                    <strong>Blender</strong> &{" "}
                    <strong>Three.js</strong>.
                </p>

                <div className="scroll-hint">
                    <span>Scroll to explore</span>

                </div>

            </div>
        </section>
    );
}