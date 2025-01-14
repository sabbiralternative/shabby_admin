export const isDiamondSuspended = (data, runner) => {
  if (data?.status !== "OPEN" || runner?.status !== "ACTIVE") {
    return "suspended";
  }
};
