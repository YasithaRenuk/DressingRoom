import {Canvas} from "@react-three/fiber"
import ExperienceFemale from '../componets/ExperienceFemale'
import Sound from "../componets/Sounds"
import ConfiguratorFemale from "../componets/ConfiguratorFemale"
import { CustomizationFremaleProvider } from "./context/CustomizationFemale"
import ClothConfiguratorFemale from "../componets/ClothConfiguratorFemale"

function AppFemale(){
    return(
        <CustomizationFremaleProvider>
        <div className="App">
            <Canvas>
                <color attach="background" args={["#21354"]}/>
                <ExperienceFemale/>
            </Canvas>
            <Sound/>
            <h1 className="title1">Dressing Room</h1>
            <ConfiguratorFemale/>
            <ClothConfiguratorFemale/>
        </div>
        </CustomizationFremaleProvider>
    )
}
export default AppFemale;