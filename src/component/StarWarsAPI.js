import {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {Text} from "react-native";
import {View} from "react-native";

const StarWarsAPI = () => {
    const [donnees, setDonnees] = useState([]);
    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then((response) => response.json())
            .then((data) => setDonnees(data.results))
    }, [])

    return (
        <View>
            {
                donnees.map((donnee) => (
                        <View key={donnee.name}>
                            <Text style={styles.text}>{donnee.name}</Text>
                        </View>
                    )
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#067783",
        justifyContent: "center",
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
    },
    text: {
        color: "#1b234b",
        fontSize: 30

    },
});
export default StarWarsAPI