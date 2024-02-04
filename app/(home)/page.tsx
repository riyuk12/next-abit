import { Bannerimg } from "./_components/hero/bannerimg";
import { Content } from "./_components/hero/content";

const Home = () => {
    return(
        <div>
            <Bannerimg banner="/coverimage.svg" stretch="/band.png" card={{name:"John Doe",bio:"Simply a film fan creating original content for YouTube. Let’s Collaborate.",avatar:"/pfpbig.png",handle:"@johndoe"}}/>
            <Content />
        </div>
    )
}

export default Home;