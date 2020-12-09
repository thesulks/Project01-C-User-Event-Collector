import { Request, Response, NextFunction } from 'express';
import Artist from '../../entities/Artist';

const getArtistByArtistId = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const { artistId } = req.params;
    const artist = await Artist.findOne(artistId, { relations: ['genres'] });
    if (!artist) return res.status(404).json({ message: 'Artist Not Found' });
    return res.status(200).json({ success: true, data: artist });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export default getArtistByArtistId;