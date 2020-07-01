import React from 'react';
import UserPageTemplate from '../components/templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = () => (
  <UserPageTemplate pageType="article">
    <Card cardType="Articles" />
    <Card cardType="Articles" />
    <Card cardType="Articles" />
    <Card cardType="Articles" />
    <Card cardType="Articles" />
    <Card cardType="Articles" />
  </UserPageTemplate>
);

export default Articles;
