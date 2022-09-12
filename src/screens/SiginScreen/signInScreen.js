import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/imgs/alogo.png";
import CostumInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";

const signInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();
  const onSiginPressed = () => {
    console.warn("Sig in");
  }
  const onForgotPasswordPressed = () => {
    console.warn("on Forgot Password Pressed");
  }
  

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CostumInput
        placeholder="username"
        value={username}
        setValue={setUsername}
      />
      <CostumInput
       placeholder="password" 
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
       />
       <CustomButton 
       text="Sig in"
       onPress={onSiginPressed}
       />
       <CustomButton 
       text="Forgot Password"
       onPress={onForgotPasswordPressed}
       type = "TERTIARY"
       />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "110%",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    maxWidth: 200,
    maxHeight: 200,
  },
});

export default signInScreen;
