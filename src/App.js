
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Box } from '@mui/material';

import { Feed ,SearchFeed,VideoDetail,ChannelDetail, Navbar} from './components'

const App = () =>(
<BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path ="/video/:id" element= {<VideoDetail />} />
      <Route path ="/Channel/:id" element= {<ChannelDetail />} />
      <Route path ="/Search/:SearchTerm" element= {<SearchFeed />} />
    </Routes>
  </Box>
</BrowserRouter>
);


export default App;
