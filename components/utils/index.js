export function auth(){
  return typeof window !== 'undefined' ? localStorage.getItem('greenpeacePhotoCollection') : undefined
}