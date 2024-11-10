function Footer({ geoLabel, infoLabel, scheduleLabel }) {
  function GeoLabel({ geoLabel }) {
    // Розділяємо стрічку на слова
    const words = geoLabel.split(" ");

    return (
      <div>
        {words.map((word, index) => (
          <p key={index} style={{ margin: 0, textAlign: "center" }}>
            {word}
          </p>
        ))}
      </div>
    );
  }
  // const ATMName = "Cajeros automáticos";

  return (
    <div className="foot">
      <div className="footer_element">
        <img
          className="footer_img"
          src="geolocation.png"
          alt="Geolocation_png"
        />
        <GeoLabel geoLabel={geoLabel} />
      </div>
      <div className="footer_element">
        <img className="footer_img" src="info.png" alt="info.png" />
        <p>{infoLabel}</p>
      </div>
      <div className="footer_element">
        <img className="footer_img" src="schedule.png" alt="schedule_png" />
        <p>{scheduleLabel}</p>
      </div>
    </div>
  );
}

export default Footer;
