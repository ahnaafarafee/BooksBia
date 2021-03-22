import { useState } from "react";

export default function TruncateString({ authorDesc, max }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const truncateAuthorDesc = isTruncated
    ? authorDesc.slice(0, max)
    : authorDesc;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p>
        {truncateAuthorDesc}
        <span
          onClick={() => setIsTruncated(toggleIsTruncated)}
          className="readMore"
        >
          {isTruncated ? "... Read More" : "  Read Less"}
        </span>
      </p>
    </div>
  );
}
