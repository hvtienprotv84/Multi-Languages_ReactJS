import React, { useState, useContext } from 'react';
import { LanguageContext } from './containers/Language';
import { Text } from '../Text';
export default function Explore() {
    // const { dictionary } = useContext(LanguageContext);

    return (
      <div>
        <h1><Text tid="exploreHeader" /></h1>
        <h2><b><Text tid="welcomeDescription" /></b></h2>
      </div>
    );
  }