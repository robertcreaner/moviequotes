import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

/**
 * useStorage is a hook similar to useState allowing you to create state in
 * a component, but unlike useState, useStorage will store as well as
 * retrieve state from AsyncStorage. If you need to store your value in a
 * environment specific context use useEnvStorage instead.
 * @param key The key to store the value under in AsyncStorage.
 * @param initialValue The initial value to use if no value is found in
 * AsyncStorage.
 * @returns A tuple with the current value, a setter function, and a clear
 * function.
 */
export const useStorage = (key: string, initialValue: string = '') => {
  const [cachedValue, setCachedValue] = useState(initialValue);

  const setValue = (value: string) => {
    (async () => {
      await AsyncStorage.setItem(key, value);
      setCachedValue(value);
    })().catch(err => {
      console.error(err);
    });
  };

  const clearValue = () => {
    (async () => {
      await AsyncStorage.removeItem(key);
    })().catch(err => {
      console.error(err);
    });
  };

  const retrieveValueEffect = () => {
    (async () => {
      if (key) {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue === null) {
          AsyncStorage.setItem(key, initialValue);
          setCachedValue(initialValue);
        } else {
          setCachedValue(storedValue);
        }
      }
    })().catch(err => {
      console.error(err);
    });
  };
  useEffect(retrieveValueEffect, [initialValue, key]);

  return [cachedValue, setValue, clearValue] as const;
};
