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
import { EnvironmentControls } from './components/experience/EnvironmentControls';




function App() {

  const [progress, setProgress] = useState(0);

  const [backgroundColor, setBackgroundColor] =
  useState("#050505");

const [fogColor, setFogColor] =
  useState("#050505");

const [fogStrength,  setFogStrength] =useState(250)

  return (
    <main className="app">


      <Canvas camera={{
        position: [5, 20, 20],
        fov: 60,

      }} dpr={[1, 1.5]}
      >

        <Suspense fallback={null}>
          <ScrollControls
            pages={4}
            damping={0.16}
            enabled
            distance={1}>

            <Scene 
            onProgressChange={setProgress}  
            backgroundColor={backgroundColor}
            fogColor={fogColor} 
            fogStrength={fogStrength}
            />

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


      </Canvas>
        <EnvironmentControls 
        backgroundColor={backgroundColor}
        fogColor={fogColor}
        fogStrength={fogStrength}
        onBackgroundChange={setBackgroundColor}
        onFogChange={setFogColor}
        onFogStrengthChange={setFogStrength}
        />


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
