import React, { useState, useEffect } from "react";
import axios from "axios";

function CityImage(props) {
  const [state, setState] = useState({
    image: "",
    photographer: "",
    cityName: "",
  });
  let tempCityName = "";

  useEffect(() => {
    async function findImage() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/images/`
      );
      props.city.split("-").forEach((ele) => {
        tempCityName += `${ele.slice(0, 1).toUpperCase() + ele.slice(1)} `;
      });
      setState({
        image: response.data.photos[0].image.web,
        photographer: response.data.photos[0].attribution.photographer,
        cityName: tempCityName.trim(),
      });
    }
    findImage();
  }, [props.city]);

  return (
    <div
      className="w-100"
      style={{
        backgroundImage: `url(${state.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "350px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ backgroundColor: "white", padding: "1%" }}>
        {state.cityName}
      </h1>
    </div>
  );
}

export default CityImage;