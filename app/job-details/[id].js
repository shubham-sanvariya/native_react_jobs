import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"


import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import { useState } from "react";

const JobDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details',
     {
        job_id: params.id
     })

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
         options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension="60%"
                    handlePress={() => router.back()}
                />
            ),
            headerRight: () => (
                <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension="60%"
                />
            ),
            headerTitle: ''
         }}
         />

        <>
            <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing}
                 onRefresh={onRefresh}
            />}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary}/>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : data.length === 0 ? (
                    <Text>No data</Text>
                ) : (
                    <View style={{ padding: SIZES.medium, paddingBottom: 100}}>
                        
                    </View>
                )}
            </ScrollView>
        </>
    </SafeAreaView>
  )
}

export default JobDetails