export enum SquareSizes {
    Big,
    Medium,
    Small
  }
  
export enum Icons{
    Tick,
    Cross
}

export enum IconLibraries {
  Feather = "feather",
  AntDesign = "antdesign",
  Ionicons = "ionicons",
  Entypo = "entypo"
}

interface CoreIconsSet {
  [key: string]: CoreIconsProps;
}

export interface CoreIconsProps {
  name: any; // just to not conditionally export Library types
  library: string; 
}

export const CoreIcons: CoreIconsSet = {
  Tick: {
      name: "check",
      library: IconLibraries.Feather
  },
  Cross: {
      name: "close",
      library: IconLibraries.Ionicons
  },
  Dot: {
      name: "dot-single",
      library: IconLibraries.Entypo
  },
  Settings: {
    name: "settings",
    library: IconLibraries.Feather
  },
  Plus: {
    name: "pluscircleo",
    library: IconLibraries.AntDesign
  }
} as const;
