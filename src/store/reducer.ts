import * as actions from './actionTypes';

export default function reducer(
  state: any = [],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case actions.USER_ADDED:
      return [
        ...state,
        {
          fullname: action.payload.fullname,
          universitas: action.payload.universitas,
          fakultas: action.payload.fakultas,
          jurusan: action.payload.jurusan,
        },
      ];
    default:
      return state;
  }
}
