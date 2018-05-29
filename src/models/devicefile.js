import { queryDeviceFile, downloadDeviceFile, queryDeviceList, queryDeviceHeartbeat} from '../services/api';

export default {
  namespace: 'devicefile',

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryDeviceFile, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },

   *download({ payload }, { call, put }) {
       yield call(downloadDeviceFile, payload);
    },

    *fetchdevicelist({ payload }, { call, put }) {
      const response = yield call(queryDeviceList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    //   *devicelistdownload({ payload }, { call, put }) {
    //     yield call(downloadDeviceList, payload);
    //  },

    *fetchheartbeat({ payload }, { call, put }) {
      const response = yield call(queryDeviceHeartbeat, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },

  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};
