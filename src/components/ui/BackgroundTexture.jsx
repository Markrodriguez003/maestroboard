import BGTexture from "../../assets/imgs/background-textures/bg-pattern-c.png";
const backgroundStyling = {
    display: "absolute",
    backgroundImage: `url(${BGTexture} )`,
    backgroundColor: "rgba(10, 81, 81, 0.9)",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "center",
    backgroundBlendMode: "soft-light",
    // backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
    margin: "auto",
    /* -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover; */
    backgroundSize: "cover",

}

function BackgroundTexture({ children }) {

    return (
        <div style={backgroundStyling}>
            {children}
        </div>
    )

}

export default BackgroundTexture;