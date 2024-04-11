import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import MealsList from "../components/MealList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({});
