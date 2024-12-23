import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HospitalGlobe from './components/HospitalGlobe'; // Your main page
import HospitalMap from './components/HospitalMap'; // The new map page
const App = () => {
  const hospitalData = [
    // USA
    { name: "Green Valley Medical Center", address: "123 Green Street, Springfield, IL, USA", contact: "+1 217-555-0123", lat: 39.7817, lng: -89.6501, services: ["Cardiology", "Neurology", "Pediatrics", "Emergency"] },
    { name: "Riverside General Hospital", address: "456 River Drive, Nashville, TN, USA", contact: "+1 615-555-0456", lat: 36.1627, lng: -86.7816, services: ["Orthopedics", "General Surgery", "Physical Therapy"] },
    { name: "St. Louis Regional Medical Center", address: "789 Union Ave, St. Louis, MO, USA", contact: "+1 314-555-0912", lat: 38.6270, lng: -90.1994, services: ["Pediatrics", "Cardiology", "General Surgery"] },
  
    // Canada
    { name: "Toronto General Hospital", address: "200 Elizabeth St, Toronto, ON, Canada", contact: "+1 416-555-1234", lat: 43.6532, lng: -79.3832, services: ["Cardiology", "Surgery", "Emergency"] },
    { name: "Montreal General Hospital", address: "1650 Cedar Ave, Montreal, QC, Canada", contact: "+1 514-555-5678", lat: 45.5043, lng: -73.5771, services: ["Pediatrics", "Orthopedics", "Radiology"] },
    { name: "Vancouver General Hospital", address: "855 W 12th Ave, Vancouver, BC, Canada", contact: "+1 604-555-7890", lat: 49.2612, lng: -123.1408, services: ["Emergency", "Oncology", "Orthopedics"] },
  
    // UK
    { name: "St Thomas' Hospital", address: "Westminster Bridge Rd, London, UK", contact: "+44 20 5555 5678", lat: 51.4993, lng: -0.1195, services: ["Cardiology", "Oncology", "Surgery"] },
    { name: "Guy's Hospital", address: "Great Maze Pond, London, UK", contact: "+44 20 5555 1245", lat: 51.5084, lng: -0.0918, services: ["Pediatrics", "Surgery", "Emergency"] },
    { name: "King's College Hospital", address: "Denmark Hill, London, UK", contact: "+44 20 5555 6789", lat: 51.4659, lng: -0.0864, services: ["Orthopedics", "Cardiology", "Neurosurgery"] },
  
    // France
    { name: "Hopital Pitie-Salpetriere", address: "47-83 Boulevard de l'Hopital, Paris, France", contact: "+33 1 5555 6789", lat: 48.8401, lng: 2.3734, services: ["Cardiology", "Neurology", "Emergency"] },
    { name: "Hopital Cochin", address: "27 Rue du Faubourg Saint-Jacques, Paris, France", contact: "+33 1 5555 2345", lat: 48.8323, lng: 2.3205, services: ["Surgery", "Pediatrics", "Oncology"] },
    { name: "Hopital Necker-Enfants Malades", address: "149 Rue de Sèvres, Paris, France", contact: "+33 1 5555 3456", lat: 48.8500, lng: 2.3156, services: ["Pediatrics", "Neonatology", "Family Medicine"] },
  
    // Germany
    { name: "Charité University Hospital", address: "Charitéplatz 1, Berlin, Germany", contact: "+49 30 5555 1245", lat: 52.5250, lng: 13.2901, services: ["Cardiology", "Oncology", "Emergency"] },
    { name: "University Hospital Munich", address: "Marchioninistr. 15, Munich, Germany", contact: "+49 89 5555 7689", lat: 48.1391, lng: 11.5807, services: ["Surgery", "Pediatrics", "Radiology"] },
    { name: "Frankfurt University Hospital", address: "Theodor-Stern-Kai 7, Frankfurt, Germany", contact: "+49 69 5555 0123", lat: 50.1128, lng: 8.6800, services: ["Cardiology", "Nephrology", "Orthopedics"] },
  
    // Italy
    { name: "Policlinico Universitario A. Gemelli", address: "Largo A. Gemelli, Rome, Italy", contact: "+39 06 5555 2345", lat: 41.9054, lng: 12.4485, services: ["Cardiology", "Emergency", "Neurology"] },
    { name: "Ospedale San Raffaele", address: "Via Olgettina, Milan, Italy", contact: "+39 02 5555 3456", lat: 45.4790, lng: 9.2372, services: ["Surgery", "Pediatrics", "Neonatology"] },
    { name: "Ospedale Niguarda Ca' Granda", address: "Piazza Ospedale Maggiore, Milan, Italy", contact: "+39 02 5555 6789", lat: 45.4847, lng: 9.2026, services: ["Trauma Care", "Cardiology", "Orthopedics"] },
  
    // Spain
    { name: "Hospital Universitario La Paz", address: "Calle Pinos, Madrid, Spain", contact: "+34 91 5555 1234", lat: 40.4835, lng: -3.6776, services: ["Neurology", "Pediatrics", "Emergency"] },
    { name: "Hospital Clínico San Carlos", address: "Calle Profesor Martín Lagos, Madrid, Spain", contact: "+34 91 5555 6789", lat: 40.4390, lng: -3.7213, services: ["Oncology", "Surgery", "Cardiology"] },
    { name: "Hospital de la Santa Creu i Sant Pau", address: "Carrer de Sant Quintí, Barcelona, Spain", contact: "+34 93 5555 0123", lat: 41.4133, lng: 2.1741, services: ["Orthopedics", "Pediatrics", "Dermatology"] },
  
    // Australia
    { name: "Royal Melbourne Hospital", address: "Grattan St, Melbourne, Australia", contact: "+61 3 5555 1234", lat: -37.7977, lng: 144.9568, services: ["Cardiology", "Emergency", "Surgery"] },
    { name: "Royal Prince Alfred Hospital", address: "Missenden Rd, Sydney, Australia", contact: "+61 2 5555 5678", lat: -33.8972, lng: 151.1724, services: ["Oncology", "Orthopedics", "Pediatrics"] },
    { name: "St Vincent's Hospital", address: "Victoria Parade, Melbourne, Australia", contact: "+61 3 5555 6789", lat: -37.7992, lng: 144.9765, services: ["Neurosurgery", "Radiology", "Trauma"] },
  
    // South Africa
    { name: "Groote Schuur Hospital", address: "Main Rd, Cape Town, South Africa", contact: "+27 21 5555 1234", lat: -33.9596, lng: 18.4691, services: ["Cardiology", "Neonatology", "Surgery"] },
    { name: "Chris Hani Baragwanath Hospital", address: "Chris Hani Rd, Johannesburg, South Africa", contact: "+27 11 5555 7890", lat: -26.2343, lng: 27.9587, services: ["Oncology", "Pediatrics", "Orthopedics"] },
    { name: "Netcare Christiaan Barnard Memorial Hospital", address: "Cape Town, South Africa", contact: "+27 21 5555 2345", lat: -33.9170, lng: 18.4203, services: ["Cardiology", "Surgery", "Emergency"] },
  
    // India
    { name: "All India Institute of Medical Sciences", address: "Ansari Nagar, New Delhi, India", contact: "+91 11 5555 1234", lat: 28.5494, lng: 77.1911, services: ["Neurology", "Orthopedics", "Emergency"] },
    { name: "Tata Memorial Hospital", address: "Dr. E. Borges Road, Mumbai, India", contact: "+91 22 5555 6789", lat: 19.0176, lng: 72.8561, services: ["Oncology", "Pediatrics", "Surgery"] },
    { name: "Christian Medical College", address: "Ludhiana, Punjab, India", contact: "+91 161 5555 9876", lat: 30.9000, lng: 75.8480, services: ["General Medicine", "Surgery", "Radiology"] },
  
    // Brazil
    { name: "Hospital das Clínicas", address: "R. Dr. Enéas de Carvalho Aguiar, São Paulo, Brazil", contact: "+55 11 5555 1234", lat: -23.5617, lng: -46.6583, services: ["Cardiology", "Oncology", "Neurology"] },
    { name: "Hospital de Câncer de Barretos", address: "Barretos, São Paulo, Brazil", contact: "+55 17 5555 4567", lat: -20.5907, lng: -49.5290, services: ["Oncology", "Surgery", "Pediatrics"] },
    { name: "Hospital Israelita Albert Einstein", address: "Avenida Albert Einstein, São Paulo, Brazil", contact: "+55 11 5555 9876", lat: -23.6245, lng: -46.6578, services: ["Cardiology", "Neurology", "Trauma"] },

    {
      name: "Mayo Clinic",
      address: "200 1st St SW, Rochester, MN, USA",
      contact: "+1 507-284-2511",
      lat: 44.0220,
      lng: -92.4666,
      services: ["Cardiology", "Oncology", "Neurology", "Surgery"],
    },
    {
      name: "Cleveland Clinic",
      address: "9500 Euclid Ave, Cleveland, OH, USA",
      contact: "+1 216-444-2200",
      lat: 41.5033,
      lng: -81.6206,
      services: ["Cardiology", "Gastroenterology", "Orthopedics", "Emergency"],
    },
  
    // Canada
    {
      name: "Sunnybrook Health Sciences Centre",
      address: "2075 Bayview Ave, Toronto, ON, Canada",
      contact: "+1 416-480-6100",
      lat: 43.7259,
      lng: -79.3764,
      services: ["Oncology", "Neurology", "Pediatrics", "Trauma"],
    },
    {
      name: "Vancouver General Hospital",
      address: "899 W 12th Ave, Vancouver, BC, Canada",
      contact: "+1 604-875-4111",
      lat: 49.2612,
      lng: -123.1239,
      services: ["Cardiology", "Orthopedics", "Oncology", "Emergency"],
    },
  
    // United Kingdom
    {
      name: "Addenbrooke's Hospital",
      address: "Hills Rd, Cambridge, UK",
      contact: "+44 1223 245151",
      lat: 52.1764,
      lng: 0.1405,
      services: ["Surgery", "Oncology", "Neurology", "Pediatrics"],
    },
    {
      name: "Royal Infirmary of Edinburgh",
      address: "51 Little France Cres, Edinburgh, UK",
      contact: "+44 131 536 1000",
      lat: 55.9210,
      lng: -3.1210,
      services: ["Emergency", "Cardiology", "Orthopedics", "Radiology"],
    },
  
    // India
    {
      name: "Apollo Hospitals",
      address: "21 Greams Lane, Chennai, Tamil Nadu, India",
      contact: "+91 44 2829 3333",
      lat: 13.0634,
      lng: 80.2518,
      services: ["Cardiology", "Surgery", "Oncology", "Emergency"],
    },
    {
      name: "Fortis Memorial Research Institute",
      address: "Sector 44, Gurugram, Haryana, India",
      contact: "+91 124 716 2200",
      lat: 28.4595,
      lng: 77.0720,
      services: ["Neurology", "Oncology", "Cardiology", "Trauma"],
    },
  
    // Australia
    {
      name: "Royal Brisbane and Women's Hospital",
      address: "Bowen Bridge Rd, Herston, QLD, Australia",
      contact: "+61 7 3646 8111",
      lat: -27.4474,
      lng: 153.0260,
      services: ["Emergency", "Pediatrics", "Neurology", "Cardiology"],
    },
    {
      name: "St Vincent's Hospital Sydney",
      address: "390 Victoria St, Darlinghurst, Sydney, Australia",
      contact: "+61 2 8382 1111",
      lat: -33.8762,
      lng: 151.2154,
      services: ["Oncology", "Surgery", "Pediatrics", "Trauma"],
    },
  
    // Germany
    {
      name: "University Medical Center Hamburg-Eppendorf",
      address: "Martinistrasse 52, Hamburg, Germany",
      contact: "+49 40 7410 0",
      lat: 53.5900,
      lng: 9.9723,
      services: ["Cardiology", "Neurology", "Oncology", "Emergency"],
    },
    {
      name: "Charité – Universitätsmedizin Berlin",
      address: "Charitéplatz 1, Berlin, Germany",
      contact: "+49 30 450 50",
      lat: 52.5236,
      lng: 13.3868,
      services: ["Surgery", "Orthopedics", "Pediatrics", "Oncology"],
    },
  
    // France
    {
      name: "Hôpital Européen Georges-Pompidou",
      address: "20 Rue Leblanc, Paris, France",
      contact: "+33 1 56 09 20 00",
      lat: 48.8402,
      lng: 2.2747,
      services: ["Cardiology", "Radiology", "Surgery", "Emergency"],
    },
    {
      name: "Centre Hospitalier Universitaire de Nantes",
      address: "1 Place Alexis-Ricordeau, Nantes, France",
      contact: "+33 2 40 08 33 33",
      lat: 47.2169,
      lng: -1.5556,
      services: ["Oncology", "Neurology", "Trauma", "Orthopedics"],
    },
  
    // South Africa
    {
      name: "Groote Schuur Hospital",
      address: "Main Rd, Observatory, Cape Town, South Africa",
      contact: "+27 21 404 9111",
      lat: -33.9339,
      lng: 18.4575,
      services: ["Cardiology", "Neurology", "Pediatrics", "Surgery"],
    },
    {
      name: "Chris Hani Baragwanath Hospital",
      address: "Chris Hani Rd, Soweto, Johannesburg, South Africa",
      contact: "+27 11 933 8000",
      lat: -26.2385,
      lng: 27.9436,
      services: ["Emergency", "Oncology", "Orthopedics", "Radiology"],
    },
  ];
  

    return (
      <Router>
        <Routes>
          <Route path="/" element={<HospitalGlobe hospitals={hospitalData} />} />
          <Route path="/hospital-map/:hospitalName" element={<HospitalMap hospitals={hospitalData} />} />
        </Routes>
      </Router>
    );
  };
  

export default App;
