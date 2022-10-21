/**
 * @name localstorage
 * @description description
 * @author GG
 * @version version
 **/

export default {
  save(key, value) {
    // opn convertioe les données en string avant l'insertion
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      //reconvertirle string json en value javascript
      return JSON.parse(value);
    }
    return null;
  },
  delete() {},
};
