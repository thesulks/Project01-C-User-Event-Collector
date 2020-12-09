import styled from '@styles/themed-components';
import Library from '@components/Template/Library';

import TrackItem from '@components/Common/TrackItem';
import LargeButton from '@components/Common/Button/LargeButton';

const MyTrack = ({ trackList }) => {
  return (
    <Library mainTitle="노래" type="track">
      <Wrapper>
        <ButtonsWrapper>
          <LargeButton customType="addToFirst" />
          <LargeButton customType="addToLast" />
        </ButtonsWrapper>
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

const ButtonsWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 16px;
`;

export default MyTrack;