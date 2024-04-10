// import original module declarations
import "styled-components";
import { Colors, Fonts } from "./theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
}