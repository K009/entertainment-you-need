import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

const DetailsTemplate = () => (
  <div>
    <h1>Note</h1>
    <p>Lorem ipsum lala</p>
    <Link to="/">go back</Link>
  </div>
);
