import React from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Explore } from "./components/Explore";
import { Library } from "./components/Library";
import { Settings } from "./components/Settings";
import { NowPlaying } from "./components/NowPlaying";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "explore", Component: Explore },
      { path: "library", Component: Library },
      { path: "settings", Component: Settings },
      { path: "player", Component: NowPlaying },
    ],
  },
]);