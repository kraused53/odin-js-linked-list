const cssContext = require.context("../css", true, /\.css$/);
cssContext.keys().forEach(cssContext);

const { setupControls } = require("./controls/controls");
const { updateDisplay } = require("./linked-list-display/linked-list-display");
const {
  initializeLinkedList,
  getLinkedListString,
} = require("./linked-list-system/manage-linked-list");

setupControls();

initializeLinkedList();

updateDisplay();
