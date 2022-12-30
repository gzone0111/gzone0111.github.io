import { Card } from "@mui/material";
import useFetch from "../utilities/useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending} = useFetch("/members/" + id)
    return (  
        <div className="BlogDetails">
            {isPending && <div>Loading...</div>}
            {blog && (
				<Card>
					<h2>{blog[0].title}</h2>
					<p>Written by {blog[0].author}</p>
				</Card>
			)}
        </div>
    );
}
 
export default BlogDetails;