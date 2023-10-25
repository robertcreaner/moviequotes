import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Text} from '../shared/Text';
import {Button} from '../shared/Button';

export type MovieQuoteType = {
  style?: StyleProp<ViewStyle>;
  id: string;
  text: string;
  isFavorite?: boolean;
  addFavoriteMovieQuote: (id: string) => void;
};

export const MovieQuote = (props: MovieQuoteType) => {
  const {id, text, isFavorite, addFavoriteMovieQuote} = props;

  const onPressMakeFavorite = () => {
    addFavoriteMovieQuote(id);
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.quoteCol}>
        <Text value={text} style={styles.text} />
      </View>
      {!isFavorite && (
        <View style={styles.makeFavoiteCol}>
          <Button
            text="Make Favorite"
            onPress={() => onPressMakeFavorite()}
            style={styles.btn}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#e3e3e3',
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
    minHeight: 70,
  },
  quoteCol: {
    flex: 7,
    justifyContent: 'center',
  },
  makeFavoiteCol: {
    flex: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  btn: {
    height: 30,
  },
});
