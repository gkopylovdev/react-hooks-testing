import { IUser } from '@lib/interfaces/User';

export interface ISharedState {
  users: {
    loading: boolean;
    list: Array<IUser>;
  };
}