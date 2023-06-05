import React from "react";
import { StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";

export default function LogoutDialog({
  visible,
  setVisible,
  handleLogOut,
}) {
  return (
    <View style={styles.container}>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Log Out</Dialog.Title>
        <Dialog.Description>
          Are you sure to log out?
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={() => setVisible(() => false)} />
        <Dialog.Button label="Yes" onPress={() => handleLogOut()} />
      </Dialog.Container>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
