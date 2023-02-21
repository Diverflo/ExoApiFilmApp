import { NavigationContainer } from "@react-navigation/native";
import MyNav from "./src/nav/BottomNav";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

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
