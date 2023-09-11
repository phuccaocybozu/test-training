import React, { ReactElement } from "react";

type SnapshotProp = {
  children: string;
};

function SnapShot({ children }: SnapshotProp) {
  return (
    <div>
      <h2>Title</h2>
      <p>{children}</p>
    </div>
  );
}

export default SnapShot;
