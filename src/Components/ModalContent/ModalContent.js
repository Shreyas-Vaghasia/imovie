import React from 'react'
import YouTube from 'react-youtube';
import axios from 'axios';
import { useEffect } from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";
import { WhatsApp } from '@mui/icons-material';

export default function ModalContent({ id }) {
    console.log(id);

    const [videoId, setvideoId] = React.useState("");
    const [youtubeLink, setyoutubeLink] = React.useState("");


    const fetchVideo = async () => {
        console.log("INSIDE FETCH VIDEO")
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6db49639138ee4ac1b9a3a592334ab74&language=en-US`)
            .then(res => {
                const videos = res.data.results[0];
                console.log(videos);
                setvideoId(videos.key);
                setyoutubeLink(`https://www.youtube.com/watch?v=${videos.key}`);
            })
            .catch(err => {
                console.log(err);
            });


    }
    useEffect(() => {
        fetchVideo();
    }, [])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginLeft: '10px', marginRight: '10px' }}>
        <YouTube videoId={videoId} opts={opts} />;

        <div style={{ display: 'flex', alignItems: 'space-between', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '10px' }}>
                <FacebookShareButton url={youtubeLink}>
                    <FacebookIcon size={32} round={true} />

                </FacebookShareButton>
            </div>
            <div style={{ marginLeft: '10px' }}>
                <TwitterShareButton url={youtubeLink}>
                    <TwitterIcon size={32} round={true} />

                </TwitterShareButton>
            </div>

            <div style={{ marginLeft: '10px' }}>
                <LinkedinShareButton url={youtubeLink}>
                    <LinkedinIcon size={32} round={true} />

                </LinkedinShareButton>
            </div>
            <div style={{ marginLeft: '10px' }}>
                <WhatsappShareButton url={youtubeLink}>
                    <WhatsappIcon size={32} round={true} />

                </WhatsappShareButton>
            </div>




        </div>

    </div>

    // return <YouTube videoId="2g811Eo7K8U" opts={opts} />;


}
