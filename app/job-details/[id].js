import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native"


import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import { useState } from "react";
import Company from "../../components/jobDetails/company/Company";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import JobTabs from "../../components/jobDetails/tabs/JobTabs";
import Specifics from "../../components/jobDetails/specifics/Specifics";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {

    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details',
     {
        job_id: params.id
     })

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = () => {};

    const displayTabContent = () => {
        switch (activeTab) {
            case "Qualifications":
                return <Specifics
                    title="Qualifications"
                    points={data[0].job_highlights?.Qualifications ?? 'N/A'}
                />
            case "About":
            case "Responsibilites":
        
            default:
                break;
        }
    }

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
                    iconUrl={icons.share}
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
                        <Company
                            companyLogo={data[0].employer_logo}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_country}
                        />

                        <JobTabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />

                        {displayTabContent()}
                    </View>
                )}
            </ScrollView>
        </>
    </SafeAreaView>
  )
}

export default JobDetails