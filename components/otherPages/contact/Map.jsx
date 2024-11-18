import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922063.5540243192!2d88.26371513125001!3d25.477993800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcd7044158b4bd%3A0x318afb8afa6560fb!2sAriyan%20Islam%20Raj!5e0!3m2!1sen!2sbd!4v1731863275544!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
