import React, { useState } from "react";
import qs from "qs";
import RefreshingImage from "./RefreshingImage.jsx";

const Component = (props) => {
  const imgUrl = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  }).imgUrl;

  const [inputImgUrl, setInputImgUrl] = useState("");

  const handleKeyDown = (e) => {
    if (e.key == "enter") {
      const urlQueryParams = new new URLSearchParams()();
      urlQueryParams.set("imgUrl", inputImgUrl);
      props.location.history.push({
        pathname: props.location.pathname,
        search: urlQueryParams,
      });
    }
  };

  if (!imgUrl) {
    return (
      <div>
        <h1>Enter an imgUrl to refresh on</h1>
        <input
          onChange={(e) => setInputImgUrl(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    );
  }

  return <RefreshingImage imgUrl={imgUrl} />;
};
export default Component;
