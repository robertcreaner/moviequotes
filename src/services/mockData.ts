import {useStorage} from '../hooks/useStorage';

export const mockData = [
  {
    id: '1',
    text: "I'll be back",
    isFavorite: false,
  },
  {
    id: '2',
    text: 'Go ahead, make my day',
    isFavorite: false,
  },
  {
    id: '3',
    text: 'May the Force be with you',
    isFavorite: false,
  },
  {
    id: '4',
    text: 'Bond. James Bond',
    isFavorite: false,
  },
  {
    id: '5',
    text: "You can't handle the truth!",
    isFavorite: false,
  },
];

export const getMockData = () => {
  const [cachedMovieQuotesData] = useStorage('movieQuotesData');

  return cachedMovieQuotesData !== ''
    ? JSON.parse(cachedMovieQuotesData)
    : mockData;
};
