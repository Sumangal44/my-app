import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView     
    >
      <View>
        <Text style={{ color: "#000", fontSize: 24, fontWeight: "bold"}}>
          Welcome to Expo Router!
        </Text>
      </View>
    </SafeAreaView>
  );
}
