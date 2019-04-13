import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import exampleFetch from '../../actions/exampleFetch';

const Container = styled.div`
  text-align: center;
`;

class Home extends Component {
  componentDidMount() {
    this.props.exampleFetch(this.props.field);
  }

  render() {
    return (
      <Container>
        <h1> Welcome to React Boilerplate App </h1>
        <h3> Now get to work </h3>
        <h4> Please </h4>
        {this.props.field && (
          <p> Example Fetch with redux: {this.props.field.title} </p>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    field: state.exampleReducer.field,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    exampleFetch: function() {
      dispatch(exampleFetch());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
