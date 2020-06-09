import React, { Component } from "react";
import SeriesList from "../Components/SeriesList";
import Loader from "../Components/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesname: "",
    isFetching: false
  };

  onSeriesListChange = e => {
    this.setState({ seriesname: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res1 => res1.json())
      .then(res2 => {
        this.setState({ series: res2, isFetching: false });
      });
  };

  render() {
    const { seriesname, isFetching, series } = this.state;
    return (
      <div>
        <div>
          <p>You Can Find Details About your Favorite Series here..!</p>
          <input
            type="text"
            value={seriesname}
            onChange={this.onSeriesListChange}
            maxLength="15"
          />
        </div>
        {!isFetching && series.length === 0 && seriesname.trim() === "" && (
          <p>Please enter Series Name</p>
        )}

        {!isFetching && series.length === 0 && seriesname.trim() !== "" && (
          <p>No Records Found</p>
        )}

        {isFetching ? <Loader /> : <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
