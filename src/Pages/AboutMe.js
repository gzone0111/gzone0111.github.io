
import Navbar from "../Components/Navbar";
import useWithoutFlickering from "../utilities/useWithoutFlickering";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Grid} from "@mui/material";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import hkust_img from '../Images/hkust.jpg'
import ut_img from '../Images/ut.jpg'
import rov_img from '../Images/rov.jpg'

const AboutMe = () => {

    const {isPending} = useWithoutFlickering()
    return ( 
        <div>
            <Navbar/>
            {isPending && <div>loading...</div>}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                        },
                    }}
                    >
                    <TimelineItem >
                        <TimelineOppositeContent color="textSecondary">
                        2020 Sep
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Enter HKUST</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                        2020 Dec
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Joined HKUST Robotics Team - ROV Team</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                        2021 April
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>MATE Hong Kong EXPLORER Regional ROV Competition -Champion</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                        2021 June
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        
                        <TimelineContent>2022 MATE World Championship ROV Competition -TELEPRESENCE- 4th in Global</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                        2023 Jan-May
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color="secondary"/>
                        </TimelineSeparator>
                        <TimelineContent>Exchange at the University of Texas at Austin</TimelineContent>
                    </TimelineItem>
                    
                    </Timeline>
                </Grid>


                <Grid item xs={6} >
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                </List>

                <ImageList variant="masonry" cols={3} gap={8} sx={{mr:2}}>
                        <ImageListItem key={1}>
                        <img
                            src={`${hkust_img}?w=248&fit=crop&auto=format`}
                            alt={"hkust"}
                            loading="lazy"
                            onClick={()=>{window.location.href= "http://www.youtube.com";}}
                        />
                        <ImageListItemBar position="below" title={'HKUST'} />
                        </ImageListItem>

                        <ImageListItem key={2}>
                        <img
                        
                            src={`${ut_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={"ut"}
                            loading="lazy"
                        />
                        <ImageListItemBar position="below" title={'UT Autsin'} />
                        </ImageListItem>
                        
                        <ImageListItem key={3}>
                        <img
                            
                            src={`${rov_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={"rov"}
                            loading="lazy"
                        />
                        <ImageListItemBar position="below" title={'ROV TEAM'} />
                        </ImageListItem>
                </ImageList>
                </Grid>
            </Grid>
        </div>
        
     );
}
 
export default AboutMe;