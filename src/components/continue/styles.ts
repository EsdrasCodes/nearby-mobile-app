import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  btn: {
    width: 310,
    height: 56,
    backgroundColor: colors.green.base,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text: {
    fontFamily: fontFamily.medium,
    color: colors.gray[100],
    textAlign: "center",
    lineHeight: 50,
  },
})