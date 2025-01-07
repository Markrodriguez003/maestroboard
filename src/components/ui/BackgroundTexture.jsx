







import BGTexture from "../../assets/imgs/background-textures/bg-pattern-c.png";
const backgroundStyling = {

    backgroundImage: `url(${BGTexture} )`,
    backgroundColor: "rgba(10, 81, 81, 0.9)",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "center",
    backgroundBlendMode: "soft-light",
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