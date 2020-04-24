import React from "react";

export default function FailureDisplay({ failures }) {
  let failureDisplay = []
  if(failures>0){
   failureDisplay = [...Array(failures)].map((e, i) => {
        return <p key={i} className="failures-p"><i id="failure-icon" className="fad fa-alien-monster"></i></p>;
      })
      return failureDisplay;
    }

  return (
    <div className="failures">
      {failureDisplay}
    </div>
  );
}
