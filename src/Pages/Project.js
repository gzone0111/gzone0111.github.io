import Navbar from "../Components/Navbar";
import React from "react";
import useWithoutFlickering from "../utilities/useWithoutFlickering";
import { List, ListItem, Typography} from "@mui/material";
import {Card, CardContent, CardActions, Button} from "@mui/material";
import {Stack} from "@mui/material";
const Projects = () => {
    const {isPending} = useWithoutFlickering()
    return (
        <div>
            <Navbar/>
            {isPending && <div>loading...</div>}
            <List sx={{ width: '100%', maxWidth: 540, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <Stack direction="row" spacing={2}>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                LMPNN-Pro
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Research
                                </Typography>
                                <Typography variant="body2">
                                Project Working on
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/zihao-wang/LMPNN-Pro"size="small">Github (Private)</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Pervasive Localization (platform-web-API)
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Research
                                </Typography>
                                <Typography variant="body2">
                                Platform web API written in python, serve for data request from SDK & Hbase data management
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/Pervasive-positioning-standard/platform-web-API-"size="small">Github (Private)</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Pervasive Localization (MapBoxForUST)
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Research
                                </Typography>
                                <Typography variant="body2">
                                Example Pervasive localization Android App written in Kotlin
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/Pervasive-positioning-standard/MapBoxForUST"size="small">Github (Private)</Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Stack direction="row" spacing={2}>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                                Graph Neural Network in recommending venture capital investments for startups and investors
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                COMP4222
                                </Typography>
                                <Typography variant="body2">
                                Investors and venture capitalists want to invest in startups through venture capital investments. However, due to limited resources and information, startups may not be able to find interested investors; while investors might not be aware that some startups are raising funds or selling their shares.
                                <br />
                                Therefore, there is a need to match the sellers with possible buyers by recommending different startups for investors, and vice versa.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/samuellau0802/COMP-4222-Project"size="small">Github</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                LMPNN-Pro
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                COMP3111
                                </Typography>
                                <Typography variant="body2">
                                Project Working on data visualization tool written in Java using JavaFx framework.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/gzone0111/gzone0111_t17repo"size="small">Github (Private)</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                LMPNN-Pro
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                COMP2012H
                                </Typography>
                                <Typography variant="body2">
                                Project Working on third person shooter game, written in C++ using Qt Framework.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/gzone0111/COMP-2012H-10days_project/tree/merger-final"size="small">Github (Private)</Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <Stack direction="row" spacing={2}>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                2021-22 ROV projects
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Robotics Team Software Development Leader
                                </Typography>
                                <Typography variant="body2">
                                Project Working on
                                <br />
                                '"a benevolent smile"'
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/zihao-wang/LMPNN-Pro"size="small">Github</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                2020-21 ROV projects
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Robotics Team Software Development
                                </Typography>
                                <Typography variant="body2">
                                Project Working on
                                <br />
                                '"a benevolent smile"'
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/zihao-wang/LMPNN-Pro"size="small">Github</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ minWidth: '100%'}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                STM32-Data Logger
                                </Typography>
                                <Typography variant="h5" component="div">
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                ELEC3300
                                </Typography>
                                <Typography variant="body2">
                                Project Working on
                                <br />
                                '"a benevolent smile"'
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href="https://github.com/zihao-wang/LMPNN-Pro"size="small">Github</Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </ListItem>
            </List>
        </div>
      );
}
 
export default Projects;