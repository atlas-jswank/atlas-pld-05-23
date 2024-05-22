import React from "react";
import { createRoot } from "react-dom/client";
import CounterAppCC from "./CounterAppCC";
import CounterAppFC from "./CounterAppFC";
import ToDoApp from "./ToDoApp";

const div = document.getElementById("root");
const root = createRoot(div);
root.render(<CounterAppCC />);
