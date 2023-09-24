import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const SkinClors = [
  {
    color: "#D5B3A0",
  },
  {
    color: "#C69B7E",
  },
  {
    color: "#B8846C",
  },
  {
    color: "#6D4234",
  },
  {
    color: "#8A5343",
  },
];

export const backgroundImg =[
  {
    name: "apartment",
  },
  {
    name: "city",
  },
  {
    name: "dawn",
  },
  {
    name: "forest",
  },
  {
    name: "lobby",
  },
  {
    name: "night",
  },
  {
    name: "park",
  },
  {
    name: "studio",
  },
  {
    name: "sunset",
  },
  {
    name: "warehouse",
  },
];

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("cloth");
  const [legs, setLeges] = useState(1);
  const [skinColor, setskinColor] = useState(SkinClors[0].color);
  const [back, setBack] = useState(backgroundImg[0].name);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLeges,
        skinColor,
        setskinColor,
        back,
        setBack
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
