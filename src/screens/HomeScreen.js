import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Avatar, ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function MyHome() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //fetch the api from themoviedb
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=c5191e4f4ad09f6c4137c9c96cc5af59&language=fr-FR&region=FR"
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("erreur " + error))
            .finally(() => setLoading(false));
    }, []);
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
                Liste de Films
            </Text>
            {isLoading ? (
                <>
                    <Text style={{ textAlign: "center" }}>
                        En cours de téléchargement
                    </Text>
                    <ActivityIndicator />
                </>
            ) : (
                <View style={{ marginBottom: 120 }}>
                    <FlatList
                        data={data.results}
                        keyExtractor={({ id }) => id}
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
                            </ListItem>
                        )}
                    />
                </View>
            )}
        </View>
    );
}
