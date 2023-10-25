import React, {useEffect, useState} from 'react';
import {MovieQuoteInput} from '../components/movieQuote/MovieQuoteInput';
import {Button} from '../components/shared/Button';
import {MovieQuoteDraggableList} from '../components/movieQuote/MovieQuoteDraggableList';
import {StyleSheet, View} from 'react-native';
import {getMockData} from '../services/mockData';
import {useStorage} from '../hooks/useStorage';
import {MovieQuoteType} from '../components/movieQuote/MovieQuote';

export const MovieQuoteScreen = () => {
  const [movieQuote, setMovieQuote] = useState('');
  const [movieQuotesData, setMovieQuotesData] = useState(getMockData());
  const [dataPending, setDataPending] = useState(true);
  const [cachedMovieQuotesData, setCachedMovieQuotesData, clear] =
    useStorage('movieQuotesData');

  // Simulate fetch data
  useEffect(() => {
    setTimeout(() => setDataPending(false), 1000);
  }, []);

  // Save updated movie quote list to storage
  useEffect(() => {
    if (cachedMovieQuotesData !== '') {
      setMovieQuotesData(JSON.parse(cachedMovieQuotesData));
    }
  }, [cachedMovieQuotesData]);

  // Submit new movie quote
  const addMovieQuote = () => {
    if (movieQuote !== '') {
      const id = Math.floor(Math.random() * 10000).toString();
      const newMovieQuotesData = [
        ...movieQuotesData,
        {
          id,
          text: movieQuote,
          isFavorite: false,
        },
      ];

      updateMovieQuotesData(newMovieQuotesData);
    }
  };

  const addFavoriteMovieQuote = (id: string) => {
    const favoriteQuote = movieQuotesData.find(i => i.id === id);
    const otherQuotes = movieQuotesData.reduce((acc, i) => {
      if (i.id !== id) {
        acc.push({
          ...i,
          isFavorite: false,
        });
      }
      return acc;
    }, []);

    const newMovieQuotesData = [
      {...favoriteQuote, isFavorite: true},
      ...otherQuotes,
    ];

    updateMovieQuotesData(newMovieQuotesData);
  };

  const updateMovieQuotesData = (d: MovieQuoteType[]) => {
    setCachedMovieQuotesData(JSON.stringify(d));
    setMovieQuotesData(d);
  };

  return (
    <>
      <View style={styles.movieQuoteInputStyle}>
        <MovieQuoteInput
          {...{
            value: movieQuote,
            placeholder: 'Enter movie quote...',
            onChange: setMovieQuote,
            onSubmit: addMovieQuote,
          }}
        />
      </View>

      <Button
        text="Submit"
        onPress={addMovieQuote}
        style={styles.submitQuoteBtnStyle}
      />

      <MovieQuoteDraggableList
        label={'Best Movie Quotes'}
        data={movieQuotesData}
        setData={updateMovieQuotesData}
        dataPending={dataPending}
        addFavoriteMovieQuote={addFavoriteMovieQuote}
      />
    </>
  );
};

const styles = StyleSheet.create({
  movieQuoteInputStyle: {
    marginTop: 20,
  },
  submitQuoteBtnStyle: {
    marginBottom: 40,
    marginTop: 4,
    marginHorizontal: 16,
  },
});
