
// LIBRARIES
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    XIcon
} from "react-share";

// REACT
import { useState } from "react";

// ASSETS
import { Clipboard2HeartFill, Paperclip } from "react-bootstrap-icons";

// COMPONENTS
import { Button, Stack, Toast } from "react-bootstrap";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Social Media panel to share URL link of post or article
|                     
|   🔧 Todo: 
| 
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function ShareURLPanel(props) {

    // COPY LINK STATE
    const [isURLCopied, setIsURLCopied] = useState(false);

    // DECONSTRUCTING PROPS
    const { url, type } = props;

    // TITLE
    const title = "Maestroboard";

    const copyURLToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setIsURLCopied(true);
            setTimeout(() => setIsURLCopied(false), 2000); // Reset state after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <>

            {/* SUCCESSFUL TOAST */}
            <Toast style={{ position: "absolute", bottom: "-35px", left: "34%", width: "auto", border: "none", backgroundColor: "transparent", background: "none", boxShadow: "none" }} autohide>
                <Toast.Body>  {isURLCopied ? 'Copied link!' : ''}</Toast.Body>
            </Toast>
            <Stack direction="horizontal" className="gap-2 m-0 p-0">
                <strong><small>Share:</small></strong>
                {/* EMAIL */}
                <div className="Demo__some-network">
                    <EmailShareButton
                        url={url}
                        title={title}
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
                <button onClick={copyURLToClipboard} disabled={isURLCopied} style={{ backgroundColor: "darkcyan", padding: "1px", borderRadius: "50px", cursor: "pointer" }}>
                    <Paperclip style={{ width: "26px", height: "auto", color: "white" }} />
                </button>

                {/* TWITTER */}
                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={url}
                        title={title}
                        className="Demo__some-network__share-button"
                    >
                        <XIcon size={32} round />
                    </TwitterShareButton>
                </div>
                {/* FACEBOOK */}
                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={url}
                        title={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
                {/* WHATSAPP */}
                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={url}
                        title={title}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </div>
            </Stack>

        </>
    )
}

export default ShareURLPanel;