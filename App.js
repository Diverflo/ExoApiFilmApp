import { NavigationContainer } from "@react-navigation/native";
import MyNav from "./src/nav/BottomNav";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

export default function App() {
    return (
        <>
            <StatusBar />
            <Provider store={store}>
                <NavigationContainer>
                    <MyNav />
                </NavigationContainer>
            </Provider>
        </>
    );
}
