import { createSelector } from 'reselect';
import { propOr } from 'ramda';

const selectShootyState = propOr({}, 'shooty');
const selectStartTime = createSelector(
  selectShootyState,
  propOr(null, 'startTime')
);
const selectSecondsRemaining = createSelector(
  selectStartTime,
  time => {
    console.log('selectSecondsRemaining', time);
    if (!time) return 0;
    const now = new Date();
    const diff = new Date(now.getTime() - time.getTime());
    const seconds = diff.getSeconds();
    console.log('seconds:', seconds);
    return seconds > 60 ? 0 : 60 - seconds;
  }
);

export const selectShootyLasersGameState = createSelector(
  selectShootyState,
  selectSecondsRemaining,
  (shooty, seconds) => Object.assign({}, shooty, { secondsRemaining: seconds })
);
