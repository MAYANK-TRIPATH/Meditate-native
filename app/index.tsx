import "../global.css";
import { View, Text, ImageBackground } from 'react-native';
import beachImage from '@/assets/meditation-images/beach.webp';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";

export default function App() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-white text-4xl font-bold text-center">
                App
              </Text>
              <Text className="text-white text-2xl font-semibold text-center">
                Here you can calm your mind, thoughts and relax.
              </Text>
            </View>
            
            <View className="pb-4 px-4 bg-white rounded-xl items-center justify-center">
              <CustomButton
                onPress={() => console.log("tap")}
                title="Get Started"
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}