export const createNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
})

export const createNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerLeft,
})

export const createDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
})

export const createDrawerConfig = (drawerWidth, drawerPosition, initialRouteName) => ({
  drawerWidth,
  drawerPosition,
  initialRouteName,
  drawerOpenRoute:    "DrawerOpen",
  drawerCloseRoute:   "DrawerClose",
  drawerToggleRoute:  "DrawerToggle",
})
