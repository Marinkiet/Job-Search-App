import { View, ScrollView,SafeAreaView,Text } from 'react-native'
import {UseState} from 'react'
import { Stack,useRouter } from 'expo-router'
import {COLORS,icons,images,SIZES} from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

export default function Home() {
    const router = useRouter();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimention="60%"/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimention="100%"/>
                ),
                headerTitle:""
        }}>
        </Stack.Screen>
        <ScrollView backgroundColor="white" showsVerticalScrollIndicator={false}>
            <View
            style={{
                flex:1,
                padding:SIZES.medium
            }}>
                <Welcome></Welcome>
                <Popularjobs></Popularjobs>
                <Nearbyjobs></Nearbyjobs>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}