import { Image, Text, TextInput, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./login.style.js";
import Button from "../../componentes/button/button.jsx";

function Login(){
  return <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image source={logo} style={styles.logo}></Image>
      </View>

      <View>

        <View style={styles.containerInput}>
            <TextInput placeholder="E-mail" style={styles.input}/>  
        </View>

        <View style={styles.containerInput} >
            <TextInput placeholder="Senha" style={styles.input}/>  
        </View>
          <Button text="Acessar"/>
      </View>

      <View style={styles.footer}>
         <Text>Nao tenho conta. criar conta.</Text>
      </View>
     

  </View>
}

export default Login;