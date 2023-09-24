import {Canvas} from "@react-three/fiber"
import Experience from '../componets/Experience'
import './App.css'
import Configurator from "../componets/Configurator"
import Sound from "../componets/Sounds"
import { CustomizationProvider } from "./context/Customization"

function App() {
  

  return (
    <CustomizationProvider>
    <div className='App'>
      <Canvas>
        <color attach="background" args={["#21354"]}/>
        {/* <fog attach="fog" args={['#21354',10,20]}/> */}
        <Experience/>  
      </Canvas>
      <Sound/>
      <h1 className="title1">Dressing Room</h1>
      <Configurator/>
    </div>
    </CustomizationProvider>
  )
}

export default App
