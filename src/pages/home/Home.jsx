import { useState } from "react";
import ExploreMenu from "../../components/layout/exploreMenu/ExploreMenu";
import Header from "../../components/layout/header/Header";
import FoodDisplay from "../../components/layout/foodDisplay/FoodDisplay";
import AppDownload from "../../components/layout/appDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
};

export default Home;
