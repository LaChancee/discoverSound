import {Text} from "react-native"
import {View} from "react-native"
import React, {useContext} from "react";

const HomeScreen = () => {
    const {userData, setUserData} = useContext(UserContext);

    return (
        <View>
            <Text>
                Salut à toi {userData.username}
            </Text>
        </View>
    )
}
export default HomeScreen