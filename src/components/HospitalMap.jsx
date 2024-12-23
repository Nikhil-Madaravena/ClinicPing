import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'; // Import CircleMarker
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import { useParams } from 'react-router-dom';

const HospitalMap = ({ hospitals }) => {
  const { hospitalName } = useParams();
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef();

  // Fetch user location continuously using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Unable to retrieve location.");
          setUserLocation([12.9716, 77.5946]); // Default to Bangalore coordinates if Geolocation fails
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId); // Clean up the watch when the component unmounts
      };
    } else {
      console.error("Geolocation is not supported by this browser.");
      setUserLocation([12.9716, 77.5946]); // Default to Bangalore coordinates
    }
  }, []);

  // Fetch hospital details based on the route parameter
  useEffect(() => {
    const hospital = hospitals.find((h) => h.name === decodeURIComponent(hospitalName));
    if (hospital) {
      setSelectedHospital(hospital);
    }
  }, [hospitalName, hospitals]);

  // Add routing control to the map
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
        lineOptions: {
          styles: [{ color: 'blue', weight: 5 }],
        },
        createMarker: (i, waypoint) => {
          return L.marker(waypoint.latLng, {
            icon: L.icon({
              iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            }),
          });
        },
      }).addTo(mapRef.current);

      return () => {
        mapRef.current.removeControl(routingControl);
      };
    }
  }, [userLocation, selectedHospital]);

  if (!selectedHospital) {
    return <div>Loading hospital details...</div>;
  }

  const { lat, lng, name, address, contact } = selectedHospital;

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <MapContainer
        center={userLocation || [lat, lng]}  // Default to hospital if no user location
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        whenCreated={(map) => {
          mapRef.current = map;
          map.invalidateSize();
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* User Location Ring Marker */}
        {userLocation && (
            <CircleMarker position={userLocation}
              center={userLocation}
              radius={20}  // The radius of the ring
              color="blue"
              weight={3}
              opacity={1}
              fillColor="blue"
              fillOpacity={0.2}
            ><Popup>You are here</Popup>
            </CircleMarker>
        )}

        {/* Hospital Marker */}
        <Marker
          position={[lat, lng]}
          icon={new L.Icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41],
          })}
        >
          <Popup>
            <h3>{name}</h3>
            <p><strong>Address:</strong> {address}</p>
            <p><strong>Contact:</strong> {contact}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HospitalMap;
