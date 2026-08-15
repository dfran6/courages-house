import { Suspense } from 'react'
import { useState } from "react";
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Scene } from './components/experience/Scene'



import { Intro } from "./components/ui/Intro";
import { ScrollIndicator } from "./components/ui/ScrollIndicator";
import { ExplorePrompt } from "./components/ui/ExplorePrompt";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { Header } from './components/ui/Header';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'




function App() {

  const [progress, setProgress] = useState(0);

  return (
    <main className="app">


      <Canvas camera={{
        position: [5, 20, 20],
        fov: 60,

      }}>

        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.16}>
            <Scene onProgressChange={setProgress} />

          </ScrollControls>
          <EffectComposer>
            <Bloom
              intensity={0.4}
              luminanceThreshold={0.7}
              luminanceSmoothing={0.5}
              mipmapBlur
            />

            <Vignette
              eskil={false}
              offset={0.5}
              darkness={0.65}
            />

            <Noise opacity={0.02} />
          </EffectComposer>
        </Suspense>

        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 0, 250]} />
      </Canvas>


      <Header />



      <div className="ui">
        <Intro progress={progress} />

        <ScrollIndicator progress={progress} />

        <ExplorePrompt progress={progress} />
      </div>

      <LoadingScreen />
    </main>
  )
}

export default App
