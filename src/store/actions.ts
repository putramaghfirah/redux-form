import * as actions from './actionTypes';

export const userAdded = (
  fullname: string,
  universitas: string,
  fakultas: string,
  jurusan: string
) => ({
  type: actions.USER_ADDED,
  payload: { fullname, universitas, fakultas, jurusan },
});
