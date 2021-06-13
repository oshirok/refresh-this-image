import React, { useEffect, useState } from "react";

const RefreshingImage = (props) => {
  const imgUrl = props.imgUrl;

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    setInterval(() => {
      forceUpdate();
    }, 5000);
  }, []);

  if (!imgUrl) {
    return (
      <div>
        <p>Please enter an imgUrl</p>
      </div>
    );
  }

  return (
    <div>
      <img
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: "contain",
        }}
        // Changing the URL here prevents re-rendering of the image element
        src={imgUrl + "?i=" + Date.now()}
      />
    </div>
  );
};
export default RefreshingImage;
