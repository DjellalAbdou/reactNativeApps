import {StyleSheet, Dimensions} from 'react-native';

const ICON_FONT = 'tinderclone';

const PRIMARY_COLOR = '#7444C0';
const SECONDARY_COLOR = '#5636B8';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

const STAR_ACTIONS = '#FFA200';
const LIKE_ACTIONS = '#B644B2';
const DISLIKE_ACTIONS = '#363636';
const FLASH_ACTIONS = '#5028D7';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  iconBottomBar: {
    fontFamily: ICON_FONT,
    //height: 100,
    paddingBottom: 0,
  },
  backgroudImg: {
    flex: 1,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  ImageExplore: {
    borderRadius: 8,
    width: DIMENSION_WIDTH - 80,
    height: DIMENSION_HEIGHT / 2 - 10,
    margin: 20,
  },
  cardItemContainer: {
    backgroundColor: WHITE,
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
    elevation: 0.5,
  },
  cardItemMatch: {
    marginTop: -35,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  cardItemMatchText: {
    fontFamily: ICON_FONT,
    color: WHITE,
  },
  nameUserCard: {
    color: '#363636',
    paddingTop: 15,
    paddingBottom: 7,
    fontSize: 30,
  },
  cardItemDescription: {
    color: GRAY,
    textAlign: 'center',
  },
  starIcon: {
    fontFamily: ICON_FONT,
    color: STAR_ACTIONS,
  },
  likeIcon: {
    fontFamily: ICON_FONT,
    fontSize: 25,
    color: LIKE_ACTIONS,
  },
  dislikeIcon: {
    fontFamily: ICON_FONT,
    fontSize: 25,
    color: DISLIKE_ACTIONS,
  },
  flashIcon: {
    fontFamily: ICON_FONT,
    color: FLASH_ACTIONS,
  },
  cardItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  miniActionButton: {
    width: 40,
    height: 40,
    backgroundColor: WHITE,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: {height: 10, width: 0},
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 7,
    borderRadius: 30,
    elevation: 2,
  },
  actioButton: {
    width: 60,
    height: 60,
    backgroundColor: WHITE,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: {height: 10, width: 0},
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 7,
    borderRadius: 30,
    elevation: 2,
  },

  // components

  cityText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13,
  },
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
    elevation: 3,
  },
  filters: {
    width: 70,
  },
  exploreTopBar: {
    paddingTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 22,
    color: DARK_GRAY,
    paddingBottom: 10,
  },
  pageIcon: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: DARK_GRAY,
    paddingRight: 10,
  },
  likesContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  statusText: {
    color: GRAY,
    fontSize: 12,
  },
  statusCircle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginRight: 4,
    backgroundColor: '#46A575',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
    marginVertical: 15,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },
  profilePhoto: {
    width: DIMENSION_WIDTH,
    height: 450,
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    transform: [{rotate: '90deg'}],
    fontSize: 20,
    color: WHITE,
    paddingLeft: 20,
    marginTop: -20,
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingRight: 20,
  },
  matcheProfileInfo: {
    marginTop: -15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    width: 131,
    borderRadius: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  profileName: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    fontSize: 16,
    textAlign: 'center',
  },
  containerProfileInfo: {
    marginTop: -65,
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {height: 0, width: 0},
    elevation: 1,
  },
  ageAndLocationProfile: {
    color: GRAY,
    textAlign: 'center',
    fontSize: 13,
    paddingBottom: 20,
  },
  infoProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconsProfile: {
    fontFamily: ICON_FONT,
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10,
  },
  textIconProfile: {
    color: GRAY,
    fontSize: 13,
  },
  iconButtonProfile: {
    fontFamily: ICON_FONT,
    color: WHITE,
    fontSize: 20,
  },
  textButtonProfile: {
    color: WHITE,
    fontFamily: ICON_FONT,
    fontSize: 15,
    paddingLeft: 5,
    paddingVertical: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 25,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 25,
  },
  actionsProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
