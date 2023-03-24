import React from 'react'
import { Box,Typography,Card,CardMedia,CardContent } from '@mui/material';
import {Link} from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({channelDetail}) => {
  return (
    <Box 
      sx={{
            borderRadius : '20px' ,
             boxShadow:'none',
             justifyContent: 'center',
             display : 'flex',
             alignItems : 'center' ,
             width: {xs : '356px' , md : '320px'},
             height : '326px',
             margin : 'auto'}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display: 'flex' ,flexDirection:'column', justifyContent:'center' ,
                            textAlign:'center',color:'#fff'}}>
                    <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius : '50%' ,height : '180px' , width:'180px'}}/>
                    <Typography>
                      {channelDetail?.snippet?.title}
                      <CheckCircle sx={{fontSize:12, color:'grey' ,ml:'5px' }}/>
                    </Typography>

            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard