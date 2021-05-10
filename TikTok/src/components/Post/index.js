import React, {useState} from 'react'

import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';




const Post = (props) => {

    const [post,setPost] = useState(props.post);

    const [isLiked, setIsLiked] = useState(false);

    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    };


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{uri: post.videoUri}} 
                    style= {styles.video}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>

            <View style={styles.uiContainer}>
                {/* SIDE BAR */}
                <View style={styles.rightContainer}>
                    <View style={styles.profilePictureContainer}>
                        <Image style={styles.profilePicture} source={{ uri: post.user.imageUri}}/>
                    </View>
                    <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                        <Entypo name={'heart'} size={40} color={isLiked ? 'red' : 'white'}/>
                        <Text style={styles.statsLabel}>{post.likes}</Text>
                    </TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <FontAwesome name={'commenting'} size={35} color='white'/>
                        <Text style={styles.statsLabel}>{post.comments}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Fontisto name={'share-a'} size={30} color='white'/>
                        <Text style={styles.statsLabel}>{post.shares}</Text>
                    </View>
                </View>
                {/* BOTTOM BAR */}
                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.handle}>@{post.user.username}</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        <View style={styles.songRow}>
                            {/*Icon Display*/}
                            <Entypo name={'beamed-note'} size={50} color='white'/>
                            {/* Display Song Name */}
                            <Text style={styles.songName}>{post.song.name}</Text>
                        </View>
                    </View>

                    <Image style={styles.songImage} source={{ uri: post.song.imageUri}}/>

                </View>
            </View>
        </View>
    );
};


export default Post;