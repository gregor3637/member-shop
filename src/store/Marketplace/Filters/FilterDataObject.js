export default function getFilterDataObject({
  isFilterRelevantBasedOnSubState,
  isFilterConditionsFilfillingItem,
  getActiveSubfiltersCount,
  reducerFn,
  reducerInitValues,
  filterMenuComponent,
  filterIcon,
  activeFilterComponentFunc,
  deriveUrlSearchPropsFromSubState,
  deriveSubStateFromSearchParamsWithSamePrimaryProp,
}) {
  if (!!!isFilterRelevantBasedOnSubState)
    throw new Error("FilterDataObject | isFilterRelevantBasedOnSubState ");
  if (!!!isFilterConditionsFilfillingItem)
    throw new Error("FilterDataObject | isFilterConditionsFilfillingItem ");
  if (!!!getActiveSubfiltersCount)
    throw new Error("FilterDataObject | getActiveSubfiltersCount ");
  if (!!!reducerFn) throw new Error("FilterDataObject | reducerFn ");
  if (!!!reducerInitValues)
    throw new Error("FilterDataObject | reducerInitValues");
  if (!!!filterIcon)
    throw new Error("FilterDataObject | filterIcon ");
  if (!!!filterMenuComponent)
    throw new Error("FilterDataObject | filterMenuComponent ");
  if (!!!activeFilterComponentFunc)
    throw new Error("FilterDataObject | activeFilterComponentFunc ");
  if (!!!deriveUrlSearchPropsFromSubState)
    throw new Error("FilterDataObject | deriveUrlSearchPropsFromSubState ");
  if (!!!deriveSubStateFromSearchParamsWithSamePrimaryProp)
    throw new Error(
      "FilterDataObject | deriveSubStateFromSearchParamsWithSamePrimaryProp 0"
    );

  return {
    isFilterRelevantBasedOnSubState, //isFilterRelevantBasedOnState
    isFilterConditionsFilfillingItem,
    getActiveSubfiltersCount,
    reducerFn,
    reducerInitValues,
    filterMenuComponent,
    filterIcon,
    activeFilterComponentFunc,
    deriveUrlSearchPropsFromSubState,
    deriveSubStateFromSearchParamsWithSamePrimaryProp,
  };
}
