import Navbar from "../Components/Navbar";
import useWithoutFlickering from "../utilities/useWithoutFlickering";
import { Paper, Box, Avatar, Typography, Stack, Link, Card, CardMedia, CardContent } from "@mui/material";
import Logo from "../Images/icon.gif"
import { Grid} from "@mui/material";
import {Button, Tabs, Tab} from "@mui/material";
import '../index.css';
import my_image_2 from "../Images/IMG_5835.jpeg"
import * as React from 'react';

// import react notion stuff
import {Accordion,AccordionSummary,AccordionDetails} from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const HomePage = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const {isPending} = useWithoutFlickering()
    return ( 
        <Stack>
            <Navbar/>
            {isPending && <div>loading...</div>}
            <Box 
            style={{ color: 'white', background: 'linear-gradient(to right bottom, #430089, #cf4fff)', marginTop:"1rem",marginBottom:"1rem"}}
            sx={{
                position: 'center',
                
                zIndex: 'modal',}}>
                <Grid 
                    alignItems="center"
                    justifyContent="center"
                    display="flex" className="ReactComponent"
                    >
                        
                    <Grid item xs={12} >
                        <Avatar alt="icon" src={Logo} sx={{ marginTop:"1rem",width: 100, height: 100 }}></Avatar>
                    </Grid> 
                        
                </Grid>
                <Typography display="flex" justifyContent="center" variant="h4">Welcome</Typography>
                <Stack direction="row" spacing={1} justifyContent="center" marginBottom={"1rem"}>
                <Button variant="contained" href="https://github.com/gzone0111">Read Posts and Projects</Button>
                <Button variant="contained" href="./about">
                    Learn More About Me :D
                </Button>
                </Stack>
                
                
            </Box>
            <Grid container spacing={2}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Grid item sx={{ mb: 2 }}>
                <Card sx={{ maxWidth: 345, borderRadius: '16px'}}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={my_image_2}
                        title="Hi"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        HongTing TSANG (Dennis)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        I am Hong Ting TSANG (曾康庭), a senior Engineering student majoring in Computer Science with a minor in Robotics.<br/>HKUST since Sept. 2020.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4">
                    Biblography  
                </Typography>
                </Grid>
                <Grid item sx={{ mb: 2 }}>
                    <Typography variant="body1" color="text.secondary" style={{ wordWrap: "break-word" }}>
                        Starting in the summer of 2022, I had my first research experience by participating in the UROP (Undergraduate Research Opportunities Program).<br/>
                        I worked under the supervision of <Link href="https://www.cse.ust.hk/~gchan/">Prof. Shueng-Han Gary Chan</Link>. <br/>
                        Together with his PhD candidate, Cheung Wing Ho, Gary, we worked on a Pervasive Localization project, <br/>
                        focusing on solving the problem of smooth transition between indoor and outdoor localization.
                        <br/>
                        <br/>
                        TIn the spring semester of 2022-23, I had the opportunity to participate in the HKUST study abroad program.<br/>
                        I was selected to exchange at UT Austin's College of Natural Science, majoring in <Link href="https://www.cs.utexas.edu/">Computer Science</Link>.<br/>
                        While immersing myself in the Texas culture, I also achieved satisfactory results, obtaining grades all As.
                        <br/>
                        <br/>
                        Prior to my exchange program, I developed a keen interest in graph neural networks through a course taught by <Link href="https://cse.hkust.edu.hk/~yqsong/">Prof. Yangqiu Song</Link>.<br/>
                        This course highlighted the fascinating applications and studies of machine learning on structured data.<br/>
                        Upon returning to my home in Hong Kong, I immediately participated in a new UROP project called Graph Machine Learning for Logical Reasoning.<br/>
                        Currently, my advisor is <Link href="https://cse.hkust.edu.hk/~yqsong/">Prof. Yangqiu Song</Link>. <br/>
                        and together with <Link href="https://zihao-wang.github.io/">Zihao Wang</Link>,
                        we are working on complex query answering on Knowledge Graphs using graph neural networks. <br/>
                        <b>We are going to publish our paper as soon as possible!</b>!
                    </Typography>
                </Grid>
                
            </Grid>
            <Paper  elevation={1} className="background">
                <Typography variant="h5" marginLeft={1} marginTop={2}>Research Interest</Typography>
                {/* <Tabs
                value={value}
                onChange={handleChange}
                centered
                >
                    <Tab
                        value="one"
                        label="GNN"
                    />
                    <Tab value="two" label="First Order reasoning on KG" />
                    <Tab value="three" label="Learning on Complex Graphs" />
                </Tabs> */}
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <Typography>GNN</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        <Link href="https://www.notion.so/a71af861e9f546de8596cf6885589e72?v=9bafddf40c314f619a4e79e3d527b5a7&pvs=4">List of papers to read</Link>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <Typography>First Order reasoning on KG</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        <Link href="https://www.notion.so/622666f1c0c44c62b93df39146370c64?v=459185cfa092429a853148b0dddc893c&pvs=4">List of papers to read</Link>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <Typography>GNN Applications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.

                        <Link href="https://www.notion.so/4f656511e1c248a791190b91a4eec9bf?v=d567d240bc764beaa698dba06761d485&pvs=4">List of papers to read</Link>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </Stack>
     );
}
 
export default HomePage;