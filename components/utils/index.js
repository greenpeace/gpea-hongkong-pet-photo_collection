import React from "react";
import {Base64} from 'js-base64';

export function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
}

export function auth(){
  return typeof window !== 'undefined' ? localStorage.getItem('greenpeacePhotoCollection') : undefined
}

export function base64Encode(value) {
  return Base64.encode(value); 
}

export function base64Decode(value) {
  return Base64.decode(value); 
}

export function saveLocalStorage(key, value) {
  localStorage.setItem(key, value);
}