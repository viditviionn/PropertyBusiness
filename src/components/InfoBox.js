export default function InfoBox({ title, icon, description }) {
    return (
      <div className="infoBox">
        {/* <div className="icon">{icon}</div> */}
        <div className="infoBoxTitle">{title}</div>
        <p style={{textAlign: 'center'}}>{description}</p>
      </div>
    );
  }
  