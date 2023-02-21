import { NavigationContainer } from "@react-navigation/native";
import MyNav from "./src/nav/BottomNav";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <MyNav />
                </NavigationContainer>
            </Provider>
        </>
    );
}
