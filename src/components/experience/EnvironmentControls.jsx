import { useState } from "react";
import { FiSliders } from "react-icons/fi";

export function EnvironmentControls({
  backgroundColor,
  fogColor,
  fogStrength,
  onBackgroundChange,
  onFogChange,
  onFogStrengthChange
}) {
  const [open, setOpen] = useState(false);


  const presets = [
    {
      name: "Mistify",
      background: "#ffffff",
      fog: "#d4cbde",
      strength: 121,
    },
    {
      name: "OutMix",
      background: "#ff8800",
      fog: "#6d0303",
      strength: 288,
    },
    {
      name: "Night",
      background: "#040000",
      fog: "#000000",
      strength: 350,
    },
  ];

  const applyPreset = (preset) => {
    onBackgroundChange(preset.background);
    onFogChange(preset.fog);
    onFogStrengthChange(preset.strength)
  };

  return (
    <div className="environment-controls">

      <button
        className="environment-toggle"
        onClick={() => setOpen(!open)}
      >
        <FiSliders />
      </button>

      {open && (
        <div className="environment-panel">

          <p>ENVIRONMENT</p>

          <label>
            Background
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) =>
                onBackgroundChange(e.target.value)
              }
            />
          </label>

          <label>
            Fog
            <input
              type="color"
              value={fogColor}
              onChange={(e) =>
                onFogChange(e.target.value)
              }
            />
          </label>

          <label>
            Fog strength
            <input
              type="number"
              max={355}
              value={fogStrength}
              onChange={(e) =>
                onFogStrengthChange(Number(e.target.value))
              }
            />
          </label>

           <p>PRESETS</p>

          <div className="environment-presets">
            {presets.map((preset) => (
              <button
                key={preset.name}
                className="preset-button"
                onClick={() => applyPreset(preset)}
              >
                {preset.name}
              </button>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}