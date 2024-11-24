import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  topPag: {
    // borderWidth: 1,
    width: "100%",
    height: 100,
    alignItems: "center",
    // marginBottom: 5
  },
  topPagContent: {
    borderColor: "black",
    // borderWidth: 1,
    // borderLeftWidth: 6,
    // borderRightWidth: 6,
    // borderBottomWidth: 6,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 1,
    paddingBottom: 16,
    paddingHorizontal: 35,
  },
  topPagContentText: {
    width: 230,
    height: 65,
    shadowColor: '#fff',  // Cor da sombra
    shadowOffset: { width: 0, height: 0 },  // Distância da sombra
    shadowOpacity: 0.7,  // Opacidade da sombra
    shadowRadius: 3,  // Desfoque da sombra
  },
  topPagBarsFoodAndWater: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    // borderWidth: 1,
    height: 30,
    marginTop: 10
  },
  topPagBarsFood: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 150,
    borderRadius: 20,
    justifyContent: "space-between",
    height: "100%",
  },
  topPagBarsFoodBlockOne: {
    borderRightWidth: 1,
    borderTopLeftRadius: 110,
    borderBottomLeftRadius: 110,
    height: "100%",
    backgroundColor: "orange",
    width: "25%",
  },
  topPagBarsFoodBlockTwo: {
    borderLeftWidth: 1,
    height: "100%",
    backgroundColor: "orange",
    width: "25%",
  },
  topPagBarsFoodBlockThree: {
    borderLeftWidth: 1,
    height: "100%",
    backgroundColor: "orange",
    width: "25%",
  },
  topPagBarsFoodBlockFour: {
    borderLeftWidth: 2,
    borderTopRightRadius: 110,
    borderBottomRightRadius: 110,
    height: "100%",
    backgroundColor: "orange",
    width: "25%",
  },
  topPagBarsWater: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 150,
    borderRadius: 20,
    justifyContent: "space-between",
    height: "100%",
  },
  topPagBarsWaterBlockOne: {
    borderRightWidth: 1,
    borderTopLeftRadius: 110,
    borderBottomLeftRadius: 110,
    height: "100%",
    backgroundColor: "#1CD4E9",
    width: "25%",
  },
  topPagBarsWaterBlockTwo: {
    borderLeftWidth: 1,
    height: "100%",
    backgroundColor: "#1CD4E9",
    width: "25%",
  },
  topPagBarsWaterBlockThree: {
    borderLeftWidth: 1,
    height: "100%",
    backgroundColor: "#1CD4E9",
    width: "25%",
  },
  topPagBarsWaterBlockFour: {
    borderLeftWidth: 2,
    borderTopRightRadius: 110,
    borderBottomRightRadius: 110,
    height: "100%",
    backgroundColor: "#1CD4E9",
    width: "25%",
  },
  date: {
    width: '100%',
    // borderWidth: 1,
    marginTop: 15
  },
  dateContainer: {
    borderWidth: 1,
    backgroundColor: "white",
    width: 70,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: 15
  },
  dateContainerText: {
    fontSize: 37,
    fontWeight: 'bold'
  },
  containerPet: {
    // borderWidth: 1,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  gifMudanca: {
    width: 335,
    height: 335,
    resizeMode: "contain",
  },
  iconFoodAndWater: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 170
  },
  iconFood: {
    // borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  iconFoodImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  iconWater: {
    // borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWaterImage: {
    width: 70,
    height: 70,
  },
  buttonsInteract: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    width: '100%',
    marginTop: 70,
    justifyContent: 'center',
    gap: 10,
    // borderWidth: 1,
    padding: 5
  },
  buttonsInteractOne: {
    // borderWidth: 1,
    width: '30%',
    borderRadius: 150,
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonsInteractTwo: {
    // borderWidth: 1,
    width: '30%',
    borderRadius: 250,
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonsInteractThree: {
    // borderWidth: 1,
    width: '30%',
    borderRadius: 150,
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonsInteractFour: {
    // borderWidth: 1,
    width: '30%',
    borderRadius: 150,
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonsInteractFive: {
    borderWidth: 1,
    backgroundColor: 'silver',
    width: '30%',
    borderRadius: 150,
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#80EDD4',
    shadowOpacity: 1,
    shadowRadius: 10, // Difusão da sombra
  },
  buttonsBordersCalendar: {
    width: 160,
    height: 160,
    resizeMode: "cover"
  },
  buttonsBordersHeart: {
    width: 210,
    height: 210,
    resizeMode: "cover"
  },
  buttonsBordersTarefas: {
    width: 180,
    height: 180,
    resizeMode: "cover"
  },
  buttonsBordersMoon: {
    width: 260,
    height: 260,
    resizeMode: "cover"
  },
  buttonsBordersExercicio: {
    width: 195,
    height: 195,
    resizeMode: "cover"
  },
  buttonsInteractIcons: {
    width: 65,
    height: 55,
  },
  buttonsInteractIconsSecond: {
    width: 60,
    height: 60
  },
  buttonStyleHomePage: {
    position: 'absolute',
    width: '100%',
    bottom: -27
  },
});