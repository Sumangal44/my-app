import { View, Text, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
export default function OnboardingScreen() {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <View>
              <Text>onbordingScrren1</Text>
            </View>
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#ccc",
          image: (
            <View>
              <Text>onbordingScrren2</Text>
            </View>
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fff",
          image: (
            <View>
              <Text>onbordingScrren3</Text>
            </View>
          ),
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "white",
  },
});
