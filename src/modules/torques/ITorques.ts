interface ITorques {
  position: number;
  history: Array<{
    averageTorque: number;
    lastTorque: number;
    assetId: string;
    profile: number;
    id: string;
  }>;
}

export default ITorques;
