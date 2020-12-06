import styled from '@styles/themed-components';
import Library from '@components/Template/Library';

import TrackItem from '@components/Common/TrackItem';

const MyTrack = ({ trackList }) => {
  return (
    <Library mainTitle="노래" type="track">
      <Wrapper>
        {trackList?.map(track => (
          <TrackItem key={track.id} type="checkbox" trackMetaData={track} />
        ))}
      </Wrapper>
    </Library>
  );
};

const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export default MyTrack;
