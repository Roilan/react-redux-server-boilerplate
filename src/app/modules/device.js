const ENABLE_MOBILE_DEVICE = 'ENABLE_MOBILE_DEVICE';

const INITIAL_STATE = {
  isMobile: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ENABLE_MOBILE_DEVICE:
      return Object.assign({}, state, {
        isMobile: action.enable
      });

    default:
      return state;
  }
}

export const enableMobile = () => ({
  type: ENABLE_MOBILE_DEVICE,
  enable: true
});
