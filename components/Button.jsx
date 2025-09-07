import { Pressable,StyleSheet,View, Text,onPress } from "react-native";
import React from "react";
import { hp ,wp} from "../helpers/common";


const Button = ({buttonFootStyling,ButtonContent}) => {
  return (
    <View style={styles.footer}>
      <Pressable>
        <Button style={styles.buttonFootStyling} onPress={onPress}>
          {ButtonContent}
        </Button>
      </Pressable>
    </View>
  );
};

export default Button;

const styles=StyleSheet.create({
    buttonFootStyling: {
    fontSize: hp(3),
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    marginBottom: hp(3),
  },
})
