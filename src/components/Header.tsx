import React from "react";
import { 
  Text,
  StyleSheet,
  Image,
  View
} from "react-native";

import userImg from '../assets/paulo.jpg';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Paulo</Text>
      </View>
      <Image source={userImg} style={styles.userImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: 30
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  userImg: { 
    width: 70,
    height: 70,
    borderRadius: 40
  },
});