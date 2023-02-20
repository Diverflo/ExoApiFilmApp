import { Avatar, ListItem } from "@rneui/themed";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { removemovie } from "../redux/favoriteSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

export default function MyFavori() {
    const navigation = useNavigation();
    const myfavorite = useSelector((state = {}) => state.favorite.myfavorite);
    const dispatch = useDispatch();
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    alignSelf: "center",
                    padding: 10,
                    color: "deeppink",
                }}
            >
                Mes Favoris
            </Text>
            {/* {console.log("myfavorite " + myfavorite)} */}
            <View style={{ marginBottom: 120 }}>
                <FlatList
                    data={myfavorite}
                    renderItem={({ item }) => (
                        <ListItem
                            key={item.id}
                            onPress={() =>
                                navigation.navigate("Detail", { item })
                            }
                        >
                            <Avatar
                                source={{
                                    uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
                                }}
                                containerStyle={{
                                    width: 80,
                                    height: 80,
                                }}
                                avatarStyle={{
                                    borderRadius: 10,
                                    resizeMode: "cover",
                                }}
                            />
                            <ListItem.Content>
                                <ListItem.Title
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        color: "blue",
                                    }}
                                >
                                    {item.title}
                                </ListItem.Title>
                                <ListItem.Subtitle style={{ fontSize: 16 }}>
                                    {item.release_date}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(removemovie(item.title));
                                    // console.log("remove2 ", removemovie(item.title));
                                }}
                            >
                                <Icon
                                    name="heart-dislike-outline"
                                    size={28}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </ListItem>
                    )}
                />
            </View>
        </View>
    );
}
