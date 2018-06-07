import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from "../actions/index";

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input type="text"
                 placeholder={"Search for a city!"}
                 className="form-control"
                 value={this.state.term}
                 onChange={event => this.setState({ term: event.target.value})}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);