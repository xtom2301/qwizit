import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-gray-700 flex-1 items-center justify-center gap-4">
      <Text className=" text-white text-4xl font-bold">
        Welcome to Qwiz<Text className="text-indigo-400">It</Text>!
      </Text>
      <Text className="text-white text-lg text-center ">
        Create your own quizzes or play quizzes created by others
      </Text>
      <Pressable
        className="bg-indigo-400 p-2 rounded-md"
        onPress={() => router.push("/(main)/dashboard")}
      >
        <Text className="text-white text-lg">Get Started</Text>
      </Pressable>
    </View>
  );
}
