import React from 'react';

const locationsData = [
  {
    id: 1,
    title: 'Office Location 1',
    address: 'Gulshan-E-Lahore Block C Gulshan E, Lahore Punjab',
    phone: '+92 311 798 2030',
    // Embedded Google Map URL for Lahore
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.823!2d74.288!3d31.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzQwLjgiTiA3NMKwMTcnMTYuOCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk'
  },
  {
    id: 2,
    title: 'Office Location 2',
    address: 'United Kingdom',
    phone: '+447787071990',
    // Embedded Google Map URL for UK (Newport)
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80000!2d-3.000!3d51.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM1JzE2LjgiTiAzwrAwMCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk'
  }
];

export default function OfficeLocations() {
  return (
    <div className="locations_section">
      <div className="locations_container">
        {locationsData.map((location) => (
          <div key={location.id} className="location_card" > 
            <div className="location_info_box" data-aos="fade-up">
              <div className="location_icon">
                {/* Cyan Map Pin Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00d2b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              
              <h3 className="location_title">{location.title}</h3>
              <p className="location_address">{location.address}</p>
              <p className="location_phone">{location.phone}</p>
            </div>
 
            <div className="location_map_box" data-aos="fade-up">
              <iframe
                title={location.title}
                src={location.mapEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}