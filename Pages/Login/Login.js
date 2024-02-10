import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "./../../assets/logo.png"; // Assuming logo.png is in the correct location
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Image
          source={logo}
          style={{ width: 150, height: 100, objectFit: "contain" }} // Adjust width and height as needed
        />
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login to Your Account
          </Text>
        </View>
        <View
          style={[
            styles.textInput,
            {
              marginTop: 70,
            },
          ]}
        >
          <MaterialIcons name="email" size={24} color={"gray"} />
          <TextInput
            style={{
              fontSize: 16,
            }}
            value={email}
            onChangeText={(text) => setemail(text)}
            placeholder="Enter your Email"
          />
        </View>
        <View
          style={[
            styles.textInput,
            {
              marginTop: 30,
            },
          ]}
        >
          <MaterialIcons name="lock" size={24} color={"gray"} />
          <TextInput
            value={Password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            style={{
              fontSize: 16,
            }}
            placeholder="Enter your Password"
          />
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged In</Text>
          <Text
            style={{
              color: "#007FFF",
              fontWeight: 500,
            }}
          >
            Forgot Password
          </Text>
        </View>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#FEBE10",
              alignItems: "center",
              justifyContent: "center",
              padding: 15,

              borderRadius: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "900",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Don't Have an Account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    display: "flex",
    borderRadius: 5,
    padding: 5,
    borderWidth: 0.5,
    borderColor: "gray",
    backgroundColor: "#D0D0D0",
    width: screenWidth - 60,
  },
});
