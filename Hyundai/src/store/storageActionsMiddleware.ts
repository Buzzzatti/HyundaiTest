const storageActionsMiddleware =
  ({dispatch}) =>
  next =>
  action => {
    return next(action);
  };

export default storageActionsMiddleware;
