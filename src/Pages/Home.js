import Navbar from "../Components/Navbar";
import useWithoutFlickering from "../utilities/useWithoutFlickering";
import { Paper, Box, Avatar, Typography, Stack, Link, Card } from "@mui/material";
import Logo from "../Images/icon.gif"
import { Grid} from "@mui/material";
import {Button} from "@mui/material";
import '../index.css'


const HomePage = () => {

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
                <Typography display="flex" justifyContent="center" variant="h4">Dennis Pages</Typography>
                <Stack direction="row" spacing={1} justifyContent="center" marginBottom={"1rem"}>
                <Button variant="contained" href="https://github.com/gzone0111">Read Posts and Projects</Button>
                <Button variant="contained" href="#contained-buttons">
                    Learn More About Me :D
                </Button>
                </Stack>
                
                
            </Box>
            <Paper  elevation={1} className="background">
                <Typography variant="h5" marginLeft={2} marginTop={2}>Recent Posts</Typography>
                <Stack>
                    <Card variant="outlined">lol</Card>
                </Stack>
            </Paper>

            <Typography align="center">Hosted on <Link href="https://pages.github.com/">Github Pages</Link></Typography> 
        </Stack>

     );
}
 
export default HomePage;