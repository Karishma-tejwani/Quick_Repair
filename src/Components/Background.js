import bgVideo from "../images/design.mp4";
import '../Style/Style.css';

function Background(){
    return(
        <>
        <video id="videoBg" autoPlay loop muted >
            <source src={bgVideo} type="video/mp4" />
        </video>
        </>
    )
}

export default Background;