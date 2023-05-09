import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Nav.css";

function Nav() {
  let navigate = useNavigate();
  const handleAddButton = () => {
    let path = `add`;
    navigate(path);
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="nav">
        <div className="navbar__top">
          <h1 className="navbar__logo">
            Meal<span>Plan</span>
          </h1>
          <p className="navbar__slogan">Healthy meals, healthy life</p>
          <button
            className="navbar__createButton btn"
            onClick={handleAddButton}
          >
            <AddIcon /> Create New
          </button>
          <button className="navbar__refreshButton btn" onClick={refresh}>
            <RefreshIcon /> Refresh
          </button>
        </div>

        <div className="navbar__menu">
          <h6 className="navbar__menuTitle">MENU</h6>

          <div className="navbar__items">
            <div className="navbar__item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <DashboardCustomizeOutlinedIcon className="navItem__icon" />
                Dashboard
              </NavLink>
            </div>

            <div className="navbar__item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                <MenuBookIcon className="navItem__icon" />
                My Recipe
              </NavLink>
            </div>

            <div className="navbar__item">
              <NavLink
                to="/favourites"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FavoriteBorderOutlinedIcon className="navItem__icon" />
                Favourites
              </NavLink>
            </div>

            <div className="navbar__item">
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <SettingsSuggestOutlinedIcon className="navItem__icon" />
                Settings
              </NavLink>
            </div>
          </div>
        </div>

        <div className="navbar__footer">
          <hr />
          <p>Abdullah-Anaz</p>
        </div>
      </div>

      <div className="responsive__navbar">
        <button className="btn" onClick={handleAddButton}>
          <AddIcon />
        </button>

        <button className="btn" onClick={refresh}>
          <RefreshIcon />
        </button>

        <button className="btn">
          <DashboardCustomizeOutlinedIcon />
        </button>

        <button className="btn">
          <MenuBookIcon className="active" />
        </button>

        <button className="btn">
          <FavoriteBorderOutlinedIcon />
        </button>

        <button className="btn">
          <SettingsSuggestOutlinedIcon />
        </button>
      </div>
    </>
  );
}

export default Nav;
