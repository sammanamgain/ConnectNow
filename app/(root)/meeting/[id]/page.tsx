import React from "react";

function Meeting({ params }: { params: { id: number } }) {
  return (
    <div>
      page
      <h1>{params.id}</h1>
    </div>
  );
}

export default Meeting;
