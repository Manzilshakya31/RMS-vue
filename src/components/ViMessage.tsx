import React from "react";

const ViMessage = (props: any) => {
  return (
    <div>
      {props.message && (
        <div className="alert-message">
          <p>{props.message}</p>
        </div>
      )}
    </div>
  );
};

export default ViMessage;
