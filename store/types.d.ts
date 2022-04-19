type ActionType1 = {
  type: string;
  payload: string;
}

type ActionType2 = {
  type: string;
  payload: boolean;
}

type ActionType3 = {
  type: string;
  payload: SocialNetworks;
}

type ActionTypes = ActionType1 | ActionType2 | ActionType3