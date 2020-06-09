import React, { Component } from "react";
import Loader from "../Components/Loader";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Single.css";

class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res1 => res1.json())
      .then(res2 => {
        this.setState({ show: res2 });
      });
  }
  render() {
    const { show } = this.state;

    return (
      <div>
        {show === null && <Loader />}

        {show !== null && (
          <Grid container justify="center">
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {show.name}
                  </Typography>

                  <Typography color="textSecondary">
                    Premiered :{show.premiered}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Rating :{show.rating.average}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Episodes :{show._embedded.episodes.length}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <img alt="show" src={show.image.medium} />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/">
                    <Button size="small">Back</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}
export default SingleSeries;
