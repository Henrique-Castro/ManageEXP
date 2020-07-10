export const handleCertificates = (a: any, b: any) => {
  const dataA = a.diasRestantes;
  const dataB = b.diasRestantes;

  let comparison = 0;

  if (dataA > dataB) comparison = 1;
  else if (dataA < dataB) comparison = -1;

  return comparison;
};

export const handleDomains = (a: any, b: any) => {
  const dataA = a.status;
  const dataB = b.status;

  let comparison = 0;

  if (dataA > dataB) comparison = 1;
  else if (dataA < dataB) comparison = -1;

  return comparison;
};
