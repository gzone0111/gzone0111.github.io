import Navbar from "../Components/Navbar";
import useWithoutFlickering from "../utilities/useWithoutFlickering";

const Projects = () => {
    const {isPending} = useWithoutFlickering()
    return (
        <div>
            <Navbar/>
            {isPending && <div>loading...</div>}
            {!isPending && <div>Projects</div>}
        </div>
      );
}
 
export default Projects;