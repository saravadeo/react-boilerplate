import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props : Object) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange = (event : Object) => {
    this.setState({term: event.target.value});
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}/>
      </div>
    );
  }

}

export default SearchBar;
