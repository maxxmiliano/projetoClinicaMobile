import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./account.style.js";
import Button from "../../componentes/button/button.jsx";

function Account(){
  return <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Image source={logo} style={styles.logo}></Image>
      </View>

      <View>

      <View style={styles.containerInput}>
            <TextInput placeholder="Nome"
             style={styles.input}
             />  
        </View>

        <View style={styles.containerInput}>
            <TextInput placeholder="E-mail"
             style={styles.input}
             />  
        </View>

        <View style={styles.containerInput}>
            <TextInput placeholder="Senha"
             style={styles.input}
             secureTextEntry={true}/>  
        </View>
           <Button text="Acessar" />
        </View>

      <View style={styles.footer}>
         <Text>Nao tenho conta. </Text>
         <TouchableOpacity>
            <Text style={styles.footerLink}
            >criar conta.
            </Text>
         </TouchableOpacity>
      </View>
     

  </View>
}

export default Account;