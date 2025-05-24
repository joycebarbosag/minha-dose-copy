import PhotoCircle from "@/components/PhotoCircle";
import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View>
            <Text>Meu cadastro</Text>
            <PhotoCircle imageSource={require('@/assets/images/avatar/mulher-2.jpg')} size={130}></PhotoCircle>
        </View>
    );
}