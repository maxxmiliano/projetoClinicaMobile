import { Alert, Text, TouchableOpacity } from "react-native";

function Button(props) {

  function TesteClick() {
    Alert.alert("clicou aqui");
  }

  return <TouchableOpacity onPress={TesteClick} style={{
    backgroundColor: "blue",
    padding: 10,
    margin: 40,
    borderRadius: 10,
    
justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }}>

    <Text style={{
      color: "red",
      fontSize: 44
    }}>
      {props.text}</Text>

  </TouchableOpacity>
    

}

export default Button;