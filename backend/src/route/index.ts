import * as express from 'express';
import sampleRoute from './sample';
import userRoute from './users';
import logRoute from './log';
import authRoute from './auth';
import libraryRoute from './library';
import trackRoute from './track';
import albumRoute from './album';
import artistRoute from './artist';
import magRoute from './mag';
import playlistRoute from './playlist';
import { authenticateWithJwt, tryAuthenticateWithJwt } from '../middlewares/auth';

const route = express.Router();

route.use('/sample', sampleRoute);
route.use('/user', userRoute);
route.use('/log', tryAuthenticateWithJwt, logRoute);
route.use('/auth', authRoute);
route.use('/library', libraryRoute);
// TODO: 프론트에서 로그인 상태 관리 문제를 해결하면 위 라인과 대체하기
// route.use('/library', authenticateWithJwt, libraryRoute);
route.use('/track', trackRoute);
route.use('/album', albumRoute);
route.use('/artist', artistRoute);
route.use('/magazine', magRoute);
route.use('/playlist', playlistRoute);

export default route;
