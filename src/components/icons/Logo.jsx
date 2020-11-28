import React from 'react';
import { NavLink } from "react-router-dom";

export default ({
  width,
  height,
  color,
}) => (
  <NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 302.699 407.393"><defs></defs><g transform="translate(-104.463 -52.009)"><path className="a" d="M4138.567-2036.091,3963.66-1933.259v202.7L4138.567-1628.7v-67.238L4016.6-1760.259v-142.19l121.971-64.971Z" transform="translate(-3859.198 2088.101)" fill={color} /><path className="a" d="M16035.538,5805.595l77.672,31.313v140.87l-77.672,29.914Z" transform="translate(-15706.048 -5650.598)" fill={color} /></g></svg></NavLink>
);