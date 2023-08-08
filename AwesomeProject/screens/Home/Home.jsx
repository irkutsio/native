import { View, Text } from "react-native"
import { PostsScreen } from "../PostsScreen/PostsScreen"
import { CreatePostScreen } from "../CreatePostScreen/CreatePostScreen"

export const Home =()=>{
    return <View>
       {/* <PostsScreen/> */}
       <CreatePostScreen/>
    </View>
}