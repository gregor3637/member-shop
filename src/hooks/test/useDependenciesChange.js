import { useEffect, useRef } from "react";

const usePrevious = (value, initialValue) => {
  const ref = useRef(initialValue);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useDependenciesChange = (
  dependencies,
  triggers,
  dependencyNames = []
) => {
  const previousDeps = usePrevious(dependencies, dependencies);

  const changedDeps = dependencies.reduce((accum, dependency, index) => {
    const changed = dependency !== previousDeps[index];
    const keyName = dependencyNames[index] || index;
    const trigger = triggers[index];

    return {
      ...accum,
      [keyName]: {
        before: previousDeps[index],
        after: dependency,
        changed,
        trigger,
      },
    };
  }, {});

  if (Object.keys(changedDeps).length) {
    console.log("[use-effect-debugger] ", changedDeps);
  }

  let changedArr = Object.keys(changedDeps).map((x) => changedDeps[x].changed);
  console.log(" Object.keys(changedDeps) ", Object.keys(changedDeps));

  Object.keys(changedDeps).forEach((key) => {
    console.log("before trigger changedArr= ", changedArr);

    if (changedDeps[key].changed) {
      changedDeps[key].trigger(changedDeps[key].before, changedDeps[key].after);
    }
  });
};

export default useDependenciesChange;
