const yaml = require('js-yaml');
const fs = require('fs');

try {
  // Read the YAML file
  const yamlData = fs.readFileSync('data.yaml', 'utf8');
  
  // Parse the YAML data
  const data = yaml.load(yamlData);

  const secondaryYaml = fs.readFileSync('secondary.yaml', 'utf8');
  const secondaryData = yaml.load(secondaryYaml);

  // Reference `first_value` from base.yaml
  secondaryData.config.inherited_value = data.values.first_value;


  // Output the parsed data
  console.log(secondaryData);
} catch (e) {
  console.error('Error loading YAML:', e);
}
