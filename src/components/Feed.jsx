import React, { useEffect, useState } from "react";
import StoryReel from "./../components/StoryReel";
import MessageSender from "./../components/MessageSender";
import Post from "./../components/Post";
import db from "./../Firebase";

import "./../Feed.css";
import "./../StoryReel.css";
import "./../MessageSender.css";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot =>
                setPosts(
                    snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
                )
            );
    }, []);

    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            {/* Posts */}
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    );
}

export default Feed;
