import PhotoCircle from "@/components/PhotoCircle";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function About() {
    return (
        <View>
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Link href="/about/bruno" asChild>
                <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/splash-icon.png')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
            <Link href="/about/douglas" asChild>
               <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/splash-icon.png')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
            <Link href="/about/emmanuel" push asChild>
                <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/splash-icon.png')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
            <Link href="/about/isabela" asChild>
                <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/splash-icon.png')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
            <Link href="/about/joana" asChild>
                <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/splash-icon.png')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
            <Link href="/about/joyce" asChild>
                <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/joyce-photo.jpg')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
            <Link href="/about/leonardo" asChild>
                <Pressable>
                    <PhotoCircle imageSource={require('@/assets/images/splash-icon.png')} size={100}></PhotoCircle>
                </Pressable>
            </Link>
        </View>
    );
}