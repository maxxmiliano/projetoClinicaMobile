import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORs, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
     BackgroundColor: COLORs.white,
     flex: 1,
     padding:50,
     justifyContent: "space-between"
    },

    containerLogo: {
        alignItems: "center"

    },
    
    logo: {
        width:100,
        height:23
    },

    input: {
      BackgroundColor: COLORs.gray5,
      padding: 20,
      borderRadius:6
    },

    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    footerLink: {
        Color: COLORs.blue
    }



       
    
}