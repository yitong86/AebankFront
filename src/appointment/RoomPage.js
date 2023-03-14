import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { element } from "prop-types";

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async(element) => {
        const appId = 706618233;
        const serverSecret = "1ca87c572ad967a4fc5743617ca9edd6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "sophia"
            );
    
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:element,
    //    sharedLinks:[
    //     {
    //         name:'Copy Link',
    //         url:`http://localhost:3000/room/${roomId}`
    //     }
    //    ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton:false,
    });
};
    return (
    <div>
        <div ref={myMeeting} />
    </div>
    )
}
export default RoomPage;