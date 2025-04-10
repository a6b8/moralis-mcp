import apiDefinition from './../scrape/moralis/api-definitions.json' assert { type: 'json' };


const typeCounts = Object.values(apiDefinition)
  .map(endpoint => endpoint.GET?.input?.variables || {})
  .reduce((allVars, currentVars) => [...allVars, ...Object.values(currentVars)], [])
  .map(v => v.type)
  .filter(Boolean)
  .reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

console.log("Type Count:", typeCounts);