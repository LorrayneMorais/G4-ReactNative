import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  topPag: {
    // borderWidth: 1,
    width: "100%",
    height: 85,
    alignItems: "center",
    // marginBottom: 5
  },
  topPagContent: {
    borderColor: "red",
    // borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 10,
    paddingBottom: 16,
    paddingHorizontal: 35,
  },
  topPagContentText: {
    fontSize: 40,
    // fontFamily: 'Doto',
    fontWeight: 600
  },
  topPagBarsFoodAndWater: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    // borderWidth: 1,
    height: 30,
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
    fontSize: 40
  },
  containerPet: {
    // borderWidth: 1,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPetMain: {
    borderWidth: 9,
    borderRadius: 300,
    width: 330,
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: 'black',  // Cor da sombra
    shadowOpacity: 1,   // Opacidade da sombra
    shadowRadius: 22,      // Raio de difusão da sombra
  },
  gif: {
    width: 350,
    height: 350,
    resizeMode: "contain"
  },
  iconFoodAndWater: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 170
  },
  iconFood: {
    borderWidth: 1,
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  iconFoodImage: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  iconWater: {
    borderWidth: 1,
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  iconWaterImage: {
    width: 30,
    height: 30,
    borderRadius: 50
  },
  buttonsInteract: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
    // borderWidth: 1,
    padding: 5
  },
  buttonsInteractOne: {
    borderWidth: 1,
    backgroundColor: 'gray',
    width: '30%',
    borderRadius: 150,
    height: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsInteractIcons: {
    width: 90,
    height: 80
  },
  buttonsInteractIconsSecond: {
    width: 80,
    height: 80
  }
});
