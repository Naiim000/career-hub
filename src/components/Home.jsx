import FeaturesJobs from "../FeaturesJobs";
import Banner from "./Banner";
import CategoryList from "./CategoryList";


const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturesJobs></FeaturesJobs>
        </div>
    );
};

export default Home;