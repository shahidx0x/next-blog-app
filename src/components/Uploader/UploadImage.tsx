import React from "react";
import { Uploader } from "rsuite";

const UploadImage = () => {
  return (
    <div>
      <Uploader
        multiple={false}
        action="//jsonplaceholder.typicode.com/posts/"
        draggable
      >
        <div
          style={{
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>Click or Drag the header image</span>
        </div>
      </Uploader>
    </div>
  );
};

export default UploadImage;
