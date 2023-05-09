import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import SetMealIcon from "@mui/icons-material/SetMeal";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EggAltIcon from "@mui/icons-material/EggAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CakeIcon from "@mui/icons-material/Cake";

import { Icon } from "@mui/material";

const categoriesData = [
  {
    category: "Healthy Recipes",
    className: "HealthyRecipes",
    icon: (
      <Icon>
        <EggAltIcon />
      </Icon>
    ),
  },
  {
    category: "South Asian Cuisine",
    className: "SouthAsianCuisine",
    icon: (
      <Icon>
        <RiceBowlIcon />
      </Icon>
    ),
  },
  {
    category: "Italian Cuisine",
    className: "ItalianCuisine",
    icon: (
      <Icon>
        <LocalPizzaIcon />
      </Icon>
    ),
  },
  {
    category: "Arab Cuisine",
    className: "ArabCuisine",
    icon: (
      <Icon>
        <KebabDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Japanese Cuisine",
    className: "JapaneseCuisine",
    icon: (
      <Icon>
        <RamenDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Breakfast",
    className: "Breakfast",
    icon: (
      <Icon>
        <BreakfastDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Brunch",
    className: "Brunch",
    icon: (
      <Icon>
        <BrunchDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Lunch",
    className: "Lunch",
    icon: (
      <Icon>
        <LunchDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Dinner",
    className: "Dinner",
    icon: (
      <Icon>
        <DinnerDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Deserts",
    className: "Deserts",
    icon: (
      <Icon>
        <IcecreamIcon />
      </Icon>
    ),
  },
  {
    category: "Fast Food",
    className: "FastFood",
    icon: (
      <Icon>
        <FastfoodIcon />
      </Icon>
    ),
  },
  {
    category: "Soup",
    className: "Soup",
    icon: (
      <Icon>
        <SoupKitchenIcon />
      </Icon>
    ),
  },
  {
    category: "Baking Recipes",
    className: "BakingRecipes",
    icon: (
      <Icon>
        <BakeryDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Barbeque & Grilling",
    className: "BarbequeAndGrilling",
    icon: (
      <Icon>
        <OutdoorGrillIcon />
      </Icon>
    ),
  },
  {
    category: "Sea Food",
    className: "SeaFood",
    icon: (
      <Icon>
        <SetMealIcon />
      </Icon>
    ),
  },
  {
    category: "Holiday Recipes",
    className: "HolidayRecipes",
    icon: (
      <Icon>
        <HolidayVillageIcon />
      </Icon>
    ),
  },
  {
    category: "Quick & Easy",
    className: "QuickAndEasy",
    icon: (
      <Icon>
        <LocalDiningIcon />
      </Icon>
    ),
  },
  {
    category: "Birthday Recipes",
    className: "BirthdayRecipes",
    icon: (
      <Icon>
        <CakeIcon />
      </Icon>
    ),
  },
  {
    category: "Hot Drinks",
    className: "HotDrinks",
    icon: (
      <Icon>
        <EmojiFoodBeverageIcon />
      </Icon>
    ),
  },
  {
    category: "Other Recipes",
    className: "OtherRecipes",
    icon: (
      <Icon>
        <RestaurantIcon />
      </Icon>
    ),
  },
];

export default categoriesData;
