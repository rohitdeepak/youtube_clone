import React from 'react'
import {Link} from 'react-router-dom';
import { Typography,CardContent,Card,CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoVideoUrl,demoVideoTitle,demo, demoChannelTitle } from '../utils/constants';
const VideoCard = ({video :{id :{
    videoId},snippet}}) => {
  return (
    <Card sx={{ width :{ md : '320px' , xs : '100%'}}}>
        <Link to ={videoId ? '/video/${videoId}' : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{height : 180 , width: 380}}/>
                <CardContent sx={{background : '#1e1e1e' , height : '106px'}}>
                    <Link to ={videoId ? '/video/${videoId}' : demoVideoTitle}>
                        <Typography variant='subtitle1' color='#fff' fontWeight='bold'>
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? '/channel/&{channelId}' : demoChannelTitle}>
                        <Typography variant='subtitle2' color='grey'>
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{fontSize : 12, color: 'grey' , ml : '5px'}}/>
                        </Typography>
                    </Link>
                </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard