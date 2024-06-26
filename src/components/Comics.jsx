import React from "react";
import "../styles/Comics.scss";

const Comics = ({ data }) => {
  return (
    <div className="comics-container">
      {data.map((c) => {
        const detailUrl = c?.urls.find((item) => item.type === "detail")?.url;
        const thumbnailUrl = `${c?.thumbnail?.path}.${c?.thumbnail?.extension}`;

        return (
          <div
            key={c.id}
            className="comics-card"
            style={{
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <section className="comics-detail">
              <a href={detailUrl} target="_blank" rel="noreferrer" className="comics-link">
                View Comics Details
              </a>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
