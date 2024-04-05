import { Text } from "react-native";

function MealDetailScreen({route}) {
  return <Text>This is the Meal Detail Screen - {route.params.mealId}</Text>
};

export default MealDetailScreen;