import React, { useState } from 'react';
import { View, Text,Image, FlatList } from 'react-native';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

const jobTypes = ["Full-time","part-time","Contractor"];

const Welcome = () => {

    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState('Full-time');

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Ronit</Text>
                <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                     style={styles.searchInput}
                     value=""
                     onChange={() => {}}
                     placeholder="What are you looking for?"
                     />
                </View>
                <TouchableOpacity
                 style={styles.searchBtn}
                 onPress={() => {}}
                 >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList 
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`)
                            }}
                        >
                            <Text 
                            style={styles.tabText(activeJobType, item)}>
                                {item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    );
}

export default Welcome;
