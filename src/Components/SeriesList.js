import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SeriesListItem = ({ series }) => {
  return (
    <li>
      <Link to={`/series/${series.show.id}`}>
        <Button size="small">{series.show.name}</Button>
      </Link>
    </li>
  );
};

const SeriesList = props => {
  return (
    <div>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
