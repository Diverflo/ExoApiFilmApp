import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MySearch from "../screens/SearchScreen";
import StackNav from "./StackNav";
import MyFavorite from "../screens/FavoriScreen";

const Tab = createBottomTabNavigator();

export default function MyNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "film" : "film-outline";
                    } else if (route.name === "Favoris") {
                        iconName = focused ? "heart" : "heart-outline";
                    } else if (route.name === "Search") {
                        iconName = focused ? "search" : "search-outline";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={32} color={color} />;
                },
                tabBarActiveTintColor: "deeppink",
                tabBarInactiveTintColor: "lightpink",
                tabBarShowLabel: false,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={StackNav} />
            <Tab.Screen name="Favoris" component={MyFavorite} />
            <Tab.Screen name="Search" component={MySearch} />
        </Tab.Navigator>
    );
}
