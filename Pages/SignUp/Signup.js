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

const Signup = () => {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [conform, setconform] = useState("");

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
            Register to Your Account
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
          <MaterialIcons name="person" size={24} color={"gray"} />
          <TextInput
            style={{
              fontSize: 16,
            }}
            value={Name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter your Name"
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
          style={[
            styles.textInput,
            {
              marginTop: 30,
            },
          ]}
        >
          <MaterialIcons name="lock" size={24} color={"gray"} />
          <TextInput
            value={conform}
            secureTextEntry={true}
            onChangeText={(text) => setconform(text)}
            style={{
              fontSize: 16,
            }}
            placeholder="Confirm your Password"
          />
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
              Register
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
          <Pressable onPress={() => navigation.goBack()}>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Already Have an Account? Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
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
