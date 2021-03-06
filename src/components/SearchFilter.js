import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import store from "../store";
import applyNewFilter from "../redux/reducers/reducer";

const styles = theme => ({
  container: {
    marginTop: 0,
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginTop: 0,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class SearchFilter extends React.Component {
  handleChange = event => {
    store.dispatch(applyNewFilter(event.target.value));
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="search"
          label="Filter results"
          placeholder="Name, address..."
          className={classes.textField}
          margin="normal"
          fullWidth
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

SearchFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchFilter);
