import { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// Your styles
const sidebarStyle = (isSidebarOpen) => ({
  top: "60px",
  width: isSidebarOpen ? "280px" : "0px",
  padding: isSidebarOpen ? "20px" : "0px",
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  color: "#fff",
  overflowY: "auto",
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  transition: "width 0.3s ease, padding 0.3s ease",
  position: "relative",
  height: "82vh",
});

const titleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#fff",
  textTransform: "uppercase",
};

const detailsBoxStyle = {
  width: "300px",
  padding: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  position: "absolute",
  top: "70px",
  left: "25px",
  zIndex: 10,
  maxHeight: "80vh",
  overflowY: "auto",
  transition: "left 0.3s ease",
};

const toggleButtonStyle = {
  position: "absolute",
  top: "20px",
  left: "20px",
  zIndex: 15,
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "24px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, background-color 0.3s ease",
  outline: "none",
};

const toggleButtonHoverStyle = {
  transform: "rotate(180deg)",
};

// Professional styling for the search bar and input field
const searchBarStyle = {
  width: "74%",
  padding: "10px 15px",
  borderRadius: "30px",
  border: "2px solid #fff",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

const searchBarFocusStyle = {
  borderColor: "#1E90FF",
  boxShadow: "0 0 10px rgba(30, 144, 255, 0.6)",
};

// Styling for the search icon
const searchButtonStyle = {
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px",
  cursor: "pointer",
  fontSize: "18px",
  transition: "background-color 0.3s ease",
  outline: "none",
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
};

const searchButtonHoverStyle = {
  backgroundColor: "transparent",
};

// Styling for the "View on Map" button
const viewOnMapButtonStyle = {
  padding: '12px 25px',
  backgroundColor: '#1E90FF', // Blue gradient background
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
  textAlign: 'center',
};

// HospitalDetails Component

const HospitalDetails = ({ hospital }) => {
  const navigate = useNavigate(); // Hook for navigation

  if (!hospital) return null;

  const handleNavigateToMap = () => {
    // Navigate to the new map page with the hospital name in the URL
    navigate(`/hospital-map/${hospital.name}`);
  };

  return (
    <div style={detailsBoxStyle}>
      <h3>{hospital.name}</h3>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Contact:</strong> {hospital.contact}</p>
      <p><strong>Latitude:</strong> {hospital.lat}</p>
      <p><strong>Longitude:</strong> {hospital.lng}</p>
      <p><strong>Services:</strong> {hospital.services.join(", ")}</p>
      <button onClick={handleNavigateToMap} style={viewOnMapButtonStyle}>
        View on Map
      </button>
    </div>
  );
};
const HospitalGlobe = ({ hospitals }) => {
  const globeEl = useRef(null);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const globeInstanceRef = useRef(null);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hospital.services.some(service =>
      service.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!Array.isArray(hospitals) || hospitals.length === 0) {
      console.error("Invalid hospitals data:", hospitals);
      return;
    }

    if (!globeEl.current) {
      console.error("Globe container not found");
      return;
    }

    if (!globeInstanceRef.current) {
      const globeInstance = Globe()(globeEl.current);

      globeInstance
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
        .ringsData(hospitals)
        .ringLat("lat")
        .ringLng("lng")
        .ringAltitude(0.01)
        .ringRepeatPeriod(2000)
        .arcsData(hospitals)
        .arcStartLat("lat")
        .arcStartLng("lng")
        .arcEndLat("lat")
        .arcEndLng("lng")
        .arcAltitude(0.1)
        .arcDashLength(0.1)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000)
        .showAtmosphere(true)
        .atmosphereColor("rgba(63, 157, 255, 0.9)")
        .atmosphereAltitude(0.25);

      globeInstance.controls().autoRotate = true;
      globeInstance.controls().autoRotateSpeed = 0.8;

      // Center the globe
      globeInstance.pointOfView({ lat: 0, lng: 0, altitude: 2 });

      globeInstanceRef.current = globeInstance;

      return () => {
        if (globeInstanceRef.current) {
          globeInstanceRef.current.controls().dispose();
          globeInstanceRef.current = null;
        }
      };
    }
  }, [hospitals]);

  useEffect(() => {
    const globeInstance = globeInstanceRef.current;

    if (selectedHospital) {
      const selected = hospitals.find((hospital) => hospital.name === selectedHospital);

      if (selected) {
        globeInstance.ringColor((d) =>
          d.name === selectedHospital ? "rgba(255, 0, 0, 0.6)" : "rgba(0, 255, 0, 0.6)"
        );

        globeInstance.arcColor((d) =>
          d.name === selectedHospital ? ["#ff0000", "#ff0000"] : ["#ffffff", "#00ff00"]
        );

        globeInstance.pointOfView(
          { lat: selected.lat, lng: selected.lng, altitude: 1.5 },
          2000
        );
      }
    }
  }, [selectedHospital, hospitals]);

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital.name);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#000" }}>
      <div style={sidebarStyle(isSidebarOpen)}>
        <h3 style={titleStyle}>Search Hospitals</h3>
        <div style={{ position: "relative" }}>
        <button
            style={{
              ...searchButtonStyle,
              ...(searchQuery && searchQuery.length > 0 ? searchButtonHoverStyle : {}),
            }}
            onClick={() => {}}
          >
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search Hospitals..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              ...searchBarStyle,
              ...(searchQuery && searchQuery.length > 0 ? searchBarFocusStyle : {}),
            }}
          />
          
        </div>
        {filteredHospitals.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {filteredHospitals.map((hospital) => (
              <li
                key={hospital.name}
                onClick={() => handleHospitalClick(hospital)}
                style={{
                  padding: "12px 16px",
                  cursor: "pointer",
                  backgroundColor:
                    hospital.name === selectedHospital
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  transition: "background-color 0.3s ease",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {hospital.name}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "#fff" }}>No hospitals found</p>
        )}
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        <HospitalDetails hospital={hospitals.find((h) => h.name === selectedHospital)} />
        <div
          ref={globeEl}
          style={{
            width: "100%",
            height: "80%",
            position: "relative",
            border: "2px solid transparent",
          }}
        />
      </div>

      <button
        onClick={toggleSidebar}
        style={{
          ...toggleButtonStyle,
          ...(isSidebarOpen ? {} : toggleButtonHoverStyle),
        }}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default HospitalGlobe;
