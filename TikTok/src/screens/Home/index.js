import React, {useEffect, useState} from 'react'

import { View, Text, FlatList, Dimensions } from 'react-native';
import Post from '../../components/Post';
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";
// import posts from '../../../data/posts';


const Home = () => {

    // storing the fetched data in a state variable in a local componenet
    const [posts, setPosts] = useState([]); //initially an empty array


    // fetching the data
    useEffect(() => {
        const fetchPost = async () => {
            //fetch all Posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts));
                setPosts(response.data.listPosts.items);
            } catch (e) {
                console.error(e);
            }
        };
        fetchPost();
    }, []);


    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height-12}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    );
};


export default Home;