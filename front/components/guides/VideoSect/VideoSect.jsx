import "./VideoSect.css"

const VideoSect = ({masterClassData}) => {
	return (
        <section className="video">
            <h2>Майстер-клас</h2>
            <iframe
              width="330"
              height="315"
              src={masterClassData.video_url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>
	);
};

export default VideoSect;