import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import DraggableFlatList, {
  DragEndParams,
  NestableDraggableFlatList,
  NestableScrollContainer,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {MovieQuote, MovieQuoteType} from './MovieQuote';
import {useRef, useState} from 'react';
import {getMockData} from '../../services/mockData';
import {useHeaderHeight} from '@react-navigation/elements';
import {screenHeight} from '../../utils/Device';
import {Text} from '../shared/Text';

export const MovieQuoteDraggableList = ({
  data,
  setData,
  dataPending,
  label,
  addFavoriteMovieQuote,
}) => {
  const headerHeight = useHeaderHeight();
  const inputEleHeight = 252;
  const draggableListHeight = screenHeight - headerHeight - inputEleHeight;

  const flatListRef = useRef(null);

  const renderItem = (props: any) => {
    const {drag, isActive, item} = props;
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} disabled={item.isFavorite}>
          <MovieQuote
            id={item.id}
            text={item.text}
            isFavorite={item.isFavorite}
            addFavoriteMovieQuote={addFavoriteMovieQuote}
          />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  if (dataPending) {
    return (
      <View
        style={{height: draggableListHeight - 100, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'#d0d0d0'} />
      </View>
    );
  }

  return (
    <>
      {label && <Text value={label} kind="label" style={styles.label} />}
      <DraggableFlatList
        style={{height: draggableListHeight}}
        contentContainerStyle={styles.contentContainer}
        ref={flatListRef}
        scrollEventThrottle={100}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        onDragEnd={({data, from, to}) => {
          setData(data);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 16,
    paddingBottom: 100,
  },
  label: {
    marginLeft: 16,
    marginBottom: 4,
    fontSize: 18,
  },
});
