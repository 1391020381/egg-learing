// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
// import ExportTest from '../.../../../app/service/user
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    user: ExportUser;
  }
}
