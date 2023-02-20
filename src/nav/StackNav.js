import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/DetailsScreen";
import MyHome from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="StackHome" component={MyHome} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}
