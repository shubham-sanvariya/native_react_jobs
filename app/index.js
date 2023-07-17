import { Stack, useRouter } from "expo-router";
import { View, ScrollView, SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES } from '../constants';
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import NearbyJobs from "../components/home/nearby/NearbyJobs";


const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS
        .lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }}
            />

            <ScrollView showsVerticalScrollIndicator
            ={false}>
                <View
                    style= {{ 
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome

                    />

                    <Popularjobs />
                    <NearbyJobs /> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Home;