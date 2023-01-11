import { createMachine } from "xstate";

export const testMachine = createMachine({
  id: "testMachine",
  tsTypes: {} as import("./test-machine.typegen").Typegen0,
  context: {},
  initial: "initializing",
  states: {
    initializing: {},
  },
  predictableActionArguments: true,
  preserveActionOrder: true,
});
