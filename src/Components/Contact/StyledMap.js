import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
const MapHolder = styled.div`
  margin-top: 2rem;
  width: 70%;
  overflow: hidden;
  opacity: 0;
  animation: ShowingUp 2s forwards;
  p {
    margin-bottom: 1rem;
    font-size: larger;
    text-align: center;
    position: relative;
  }
  p::after {
    display: block;
    content: "";
    margin-top: 0.2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    border-bottom: 1px solid gray;
  }
  @media (max-width: 870px) {
    width: 70%;
  }
  @keyframes ShowingUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export default function StyledMap() {
  return (
    <MapHolder>
      <p>U can find us here !</p>
      <MapContainer
        style={{ borderRadius: "10px" }}
        center={[54.20103, 15.85223]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[54.20723, 15.84258]}>
          <Popup>
            Auto Lakiernia-Edyta Szewczyk <br /> Tymien 3B, 76-035 Tymien
          </Popup>
        </Marker>
      </MapContainer>
    </MapHolder>
  );
}
