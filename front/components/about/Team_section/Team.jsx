import Image from "next/image";
import './Team.css'

const TeamSection = () => {
  return (
    <div className="Team-section">
      <div className="Team-box">
        <div className="Team-member">
          <div className="top">
          <Image
            src="/images/about/Main.png"
            alt="Team Member"
            className="Member-Icon"
            width={100}
            height={100}
            unoptimized
          />
          </div>
          <div className="bot">
          <p className="member-text">Ксенія самойлович</p>
          <h2 className="member-title">Організатор</h2>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default TeamSection;
