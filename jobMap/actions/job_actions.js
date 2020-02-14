import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import {FETCH_JOBS} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
};

const buildJobsUrl = zip => {
  const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip});
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = region => async dispatch => {
  try {
    let urlTest =
      'http://api.indeed.com/ads/apisearch?publisher=4201738803816157&format=json&v=2&latlong=1&radius=10&q=javascript&l=95065';
    let zip = await reverseGeocode(
      region,
      'AIzaSyDaIfMhjCO_bAl1Q1n9D4ss9Eg-jiErBBA',
    );
    console.log('zip ', zip);
    const url = buildJobsUrl(zip);
    console.log('url ', url);
    let data = await axios.get(url);
    dispatch({type: FETCH_JOBS, payload: data});
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
