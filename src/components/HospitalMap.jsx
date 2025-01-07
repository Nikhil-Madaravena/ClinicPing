import { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppointmentModal from "./AppointmentModal";
import "../components/css/HospitalMap.css";

const HospitalMap = ({ hospitals }) => {
  const { hospitalName } = useParams();
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        () => setUserLocation([12.9716, 77.5946])
      );
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setUserLocation([12.9716, 77.5946]);
    }
  }, []);

  useEffect(() => {
    const hospital = hospitals.find(
      (h) => h.name === decodeURIComponent(hospitalName)
    );
    if (hospital) {
      setSelectedHospital(hospital);
    }
  }, [hospitalName, hospitals]);

  useEffect(() => {
    if (mapRef.current && userLocation && selectedHospital) {
      const { lat, lng } = selectedHospital;

      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]),
          L.latLng(lat, lng),
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        lineOptions: { styles: [{ color: "blue", weight: 5 }] },
      }).addTo(mapRef.current);

      return () => {
        mapRef.current.removeControl(routingControl);
      };
    }
  }, [userLocation, selectedHospital]);

  if (!selectedHospital) {
    return <div className="loading">Loading hospital details...</div>;
  }

  return (
    <div className="hospital-map-container">
      <div className="content">
        <Sidebar
          hospital={selectedHospital}
          onScheduleAppointment={() => setShowModal(true)}
        />
        <div className="map-container">
          <MapContainer
            center={userLocation || [selectedHospital.lat, selectedHospital.lng]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(map) => {
              mapRef.current = map;
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {userLocation && (
              <CircleMarker
                center={userLocation}
                radius={20}
                color="blue"
                weight={3}
                fillOpacity={0.2}
              >
                <Popup>You are here</Popup>
              </CircleMarker>
            )}
            <Marker position={[selectedHospital.lat, selectedHospital.lng]}>
              <Popup>
                <h3>{selectedHospital.name}</h3>
                <p>{selectedHospital.address}</p>
                <p>{selectedHospital.contact}</p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {showModal && (
        <AppointmentModal
          hospital={selectedHospital}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default HospitalMap;
