import { useNavigation } from "@react-navigation/native";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Card, FAB } from "@rneui/themed";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addmovie, removemovie } from "../redux/favoriteSlice";

export default function Detail(props) {
    const myprops = props.route.params.item;
    // console.log(props.route.params.item);
    const navigation = useNavigation();
    const [isFavorite, setFavorite] = useState(false);
    // const myfavorite = useSelector((state) => state.favorite.myfavorite);
    const myfavorite = useSelector((state) => state.favorite.myfavorite);
    const dispatch = useDispatch();
    // console.log(dispatch(addmovie));
    // console.log("myf ", myfavorite);
    // console.log("myF ", myF);
    return (
        <View style={{ flex: 1 }}>
            <Card
                containerStyle={{
                    borderRadius: 15,
                    flex: 1,
                    marginBottom: 20,
                }}
            >
                <ScrollView>
                    <CardTitle style={{ color: "blue" }} h2>
                        {myprops.title}
                    </CardTitle>
                    <Card.Divider
                        style={{
                            width: "80%",
                            alignSelf: "center",
                            borderWidth: 1.5,
                            borderColor: "blue",
                        }}
                    />
                    <CardImage
                        source={{
                            uri: `https://image.tmdb.org/t/p/original${myprops.poster_path}`,
                        }}
                        style={{ height: 400, borderRadius: 7 }}
                        resizeMode="contain"
                    />
                    <Text style={{ alignSelf: "flex-end" }}>
                        Date de sortie {myprops.release_date}
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                        Descriptif :
                    </Text>
                    <Text style={{ fontSize: 20 }}>{myprops.overview}</Text>
                </ScrollView>
            </Card>
            <FAB
                icon={{
                    name: "reply",
                    color: "blue",
                    size: 30,
                }}
                buttonStyle={{ backgroundColor: "aliceblue" }}
                onPress={() => navigation.goBack()}
                style={{
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                }}
                size="small"
                iconContainerStyle={{ padding: 5 }}
            />
            <FAB
                icon={{
                    name: "favorite",
                    color: isFavorite ? "red" : "pink",
                    size: 30,
                }}
                buttonStyle={{ backgroundColor: "mistyrose" }}
                onPress={() => {
                    setFavorite(!isFavorite),
                        isFavorite
                            ? dispatch(removemovie(myprops.title))
                            : dispatch(addmovie(myprops));
                    // console.log("remove ", removemovie(myprops.title));
                }}
                size="small"
                style={{
                    position: "absolute",
                    right: 10,
                    bottom: 65,
                }}
                iconContainerStyle={{ padding: 5 }}
            />
        </View>
    );
}
