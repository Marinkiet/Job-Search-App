import { View, ScrollView,SafeAreaView,Text } from 'react-native'
import {UseState, useState} from 'react'
import { Stack,useRouter } from 'expo-router'
import {COLORS,icons,SIZES,images} from '../constants'
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components'

export default function Home() {
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("")
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
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
                <Welcome
                searchTerm={ searchTerm}
                setSearchTerm={ setSearchTerm}
                handleClick={()=>{
                    if(searchTerm){
                        router.push(`/serch/${searchTerm}`)
                    }
                }}
                >
                </Welcome>
                <Popularjobs></Popularjobs>
                <Nearbyjobs></Nearbyjobs>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}