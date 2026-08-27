import { AudioController } from "./AudioController";


export function ScrollIndicator({progress}) {
  return (
    <div className="scroll-indicator">
      <span>SCROLL</span>

     
      {parseInt(progress * 100)}%

      <AudioController />
    </div>
  );
}