import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";



export function LoadingScreen() {
  const { progress, active } = useProgress();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active && progress >= 100) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  if (!visible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">

        <img src={"./images/dfran6.png"} alt="" width={50}/>

        <p>LOADING EXPERIENCE</p>

        <div className="loading-bar">
          <div
            className="loading-bar-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <span>{Math.round(progress)}%</span>

      </div>
    </div>
  );
}