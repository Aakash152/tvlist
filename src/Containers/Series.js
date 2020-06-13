import React, { Component } from "react";
import SeriesList from "../Components/SeriesList";
import Loader from "../Components/Loader";
import {
  TextField,
  FormControl,
} from "@material-ui/core";
class Series extends Component {
  state = {
    series: [],
    seriesname: "",
    isFetching: false,
    
   
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
          <p>You Can Find Details About your Favorite Tv Series here..!</p><br />
          <FormControl>

            <TextField name="SeriesName" label="Enter Series Name" variant="outlined" value={seriesname}
              onChange={this.onSeriesListChange} />

          </FormControl>
        </div>
        <br/>

        {!isFetching && series.length === 0 && seriesname.trim() === "" && (
          <p>Please enter Series Name</p>
        )}

        {!isFetching && series.length === 0 && seriesname.trim() !== "" && (
          <p>No Records Found</p>
        )}
        { seriesname.length > 15 && (
          <p>Maximum 15 Characters</p>
        )}



        {isFetching ? <Loader /> : <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
