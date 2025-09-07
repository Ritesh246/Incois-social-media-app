import { StyleSheet, View, Text, Pressable, Alert, Button } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Home from "../assets/images/icons/Home";
import { theme } from "../constants/theme";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import Input from "../components/Input";
import Icon from "../assets/images/icons";
import Loading from "../components/Loading";
import { Image } from "react-native";
import WebView from "react-native-webview";
import LottieView from "lottie-react-native";

const register = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const userRef=useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Register", "Please fill all the fields");
      return;
    }
    // ready to go
    setLoading(true);
    // Add your register logic here
    // setLoading(false);
  };

  return (
    <ScreenWrapper >
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.subText}>Register to Get Started</Text>
        </View>
        
        <View style={styles.form}>
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Enter your name"
            onChangeText={(value) => (userRef.current = value)}
          />
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />


          <Button style={styles.buttonst} title="register" loading={loading} onPress={onSubmit} />
        </View>
      </View>

      
        <Text style={styles.footerText}>Already have an account?</Text>
        <Pressable onPress={() => router.push("/login")}>
          <Text style={[styles.footerText, styles.registerText]}>Login</Text>
        </Pressable>
     
    </ScreenWrapper>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  welcomeContainer: {
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  subText: {
    fontSize: 16,
    color: theme.colors.textLight,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    color: theme.colors.text,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: 16,
  },
  registerText: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  buttonst:{
    borderCurve:"continuous"
  }
});
