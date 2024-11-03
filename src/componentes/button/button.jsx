import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.styles.js";

function Button(props) {

  function TesteClick() {
    Alert.alert("clicou aqui");
  }

  return <TouchableOpacity onPress={TesteClick} style={styles.btn}>
       <Text style={styles.Text}>
            {props.text}
       </Text>
  </TouchableOpacity>
    

}

export default Button;