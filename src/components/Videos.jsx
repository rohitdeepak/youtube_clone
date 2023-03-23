import React from 'react'
import {Stack,Box} from '@mui/material';
import {VideoCard , ChannelCard} from './'


const Videos = ({video}) => {
    
  return (
    <Stack direction='row' flexWrap="wrap" justifyContent="start"
    gap={2}>
        {
            video.map((items,index)=>(
                <Box key={index}>
                    {items.id.videoId && <VideoCard video={items}/>}
                    {items.id.channelId && <ChannelCard channelDetail={items}/>}
                </Box>
            ))
        }

    </Stack>
  )
}

export default Videos