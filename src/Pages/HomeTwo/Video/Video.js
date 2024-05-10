import React, {useState} from 'react';
import img1 from "../../../assets/images/vedio-bg.jpg";
import ModalVideo from 'react-modal-video'

const Video = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    
    <div className="video-area">
        <div className="container">
            <div className="video-img">
                <img className="imageParallax" src={img1} alt="" />
                <React.Fragment>
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="L61p2uyiMSo"
                        onClose={() => setOpen(false)} 
                    />
                    <button className="btn-primary" onClick={() => setOpen(true)}>
                        <div className="video-btn"></div>
                    </button>
                </React.Fragment>
            </div>
        </div>
    </div>

  
  );
};

export default Video;
