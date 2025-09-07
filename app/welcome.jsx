import { View, Text, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { wp } from "../helpers/common";
import { Image } from "react-native";
import { hp } from "../helpers/common";
import { theme } from "../constants/theme";
import { Button } from "@react-navigation/elements";
import { Platform } from "react-native";
import Loading from "../components/Loading";
import { useRouter } from "expo-router";

const welcome = ({buttonContent}) => {
    const loading=false
    const router=useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome Image */}

        <View style={styles.flexing}>
          <Image
            style={styles.welcomeImage}
            resizeMode="contain"
            source={require("../assets/images/images/IncoisLogo.png")}
          />
          <Image
            style={styles.eyeLogo}
            resizeMode="contain"
            source={require("../assets/images/images/eyeLogo.jpg")}
          />
        </View>

        {/* Title */}

        <View style={{  }}>
          <Text style={styles.AppName}>Disaster Social</Text>
          <Text style={styles.afterName}>Media App📲</Text>
          <Text style={styles.SihPs}>
            {" "}
            Integrated Platform for Crowdsourced Ocean Hazard Reporting and
            Social Media Analytics
          </Text>
        </View>
        <View>
          <Image
            style={styles.welcomeImage2}
            resizeMode="contain"
            source={require("../assets/images/images/welcome.png")}
          />
        </View>
        {/* Footer */}
        {loading?<Loading/>:
            <Button onPress={()=>router.push('register')}>
                {buttonContent="Get Started"}
            </Button>
        }
        <Pressable onPress={()=>router.push('login')} >
        <Text style={styles.LoginClickingText} >
            Already Registered User?<Text style={{color:"green"}}>Login Here </Text> 
        </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: wp(5),
  },
  flexing: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 0,
    marginTop: hp(3),
  },
  welcomeImage: {
    height: hp(10),
    width: wp(40),
  },
  eyeLogo: {
    height: hp(10),
    width: wp(20),
    marginLeft: -wp(10),
  },
  welcomeImage2: {
    height: hp(30),
    width: wp(100),
  },

  AppName: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "start",
    fontWeight: theme.fonts,
  },
  SihPs: {
    color: theme.colors.text,
    fontSize: hp(2),
    textAlign: "justify",
    fontWeight: theme.fonts,
    fontFamily: Platform.select({
      ios: "Menlo",
      android: "monospace",
    }),
  },
  afterName: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts,
    marginBottom: hp(3),
  },
  LoginClickingText:{
    fontSize:wp(1.5),
    marginBottom:hp(1.5)
  }
});
