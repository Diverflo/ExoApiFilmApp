import { View, Text, FlatList } from "react-native";
import { Avatar, ListItem, SearchBar } from "@rneui/themed";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function MySearch() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState([]);

    async function fetchMovie(search) {
        await fetch(
            // to search films
            `https://api.themoviedb.org/3/search/movie?api_key=c5191e4f4ad09f6c4137c9c96cc5af59&language=fr-FR&query=${search}&page=1&include_adult=false`
            // to search films series...
            //`https://api.themoviedb.org/3/search/multi?api_key=c5191e4f4ad09f6c4137c9c96cc5af59&language=fr-FR&query=${search}&page=1&include_adult=false`
        )
            .then((response) => response.json())
            .then((json) => setSearch(json))
            .catch((error) => console.error("erreur " + error))
            .finally(() => setLoading(false));
    }

    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    fontSize: 30,
                    alignSelf: "center",
                    padding: 10,
                    color: "deeppink",
                }}
            >
                Recherche
            </Text>
            <SearchBar
                lightTheme
                round
                placeholder="Rechercher un film..."
                onChangeText={(text) => {
                    setInput(text);
                    fetchMovie(text);
                }}
                value={input}
                style={{ color: "blue" }}
                cursorColor="deeppink"
            />
            {isLoading ? (
                <View
                    style={{
                        alignSelf: "center",
                        justifyContent: "center",
                        flex: 1,
                    }}
                >
                    <Text>Faites votre première recherche de films ...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={search.results}
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
