/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';

export const useFetch = (animeId) => {
  const [animeData, setAnimeData] = useState({
    data: null,
    isloading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setAnimeData({
      ...animeData,
      isloading: true,
    });

    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
      if (!response.ok) {
        setAnimeData({ ...animeData, hasError: response});
      } else {
        const data = await response.json();
        setAnimeData({
          data,
          isloading: false,
          hasError: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch();
  }, [animeId]);

  return {
    data: animeData.data,
    isloading: animeData.isloading,
    hasError: animeData.hasError,
    // onNextItem: onNextItem,
  };
};
