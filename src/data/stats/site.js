const date1 = new Date('01/25/1997');
const date2 = new Date();

const days = (dateA, dateB) => {
  const difference = dateA.getTime() - dateB.getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Number of Coffee Assumed',
    key: 'stargazers_count',
    value: 3 * days(date1, date2),
  },
];

export default data;
