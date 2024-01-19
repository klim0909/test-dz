const getHealthStatus = require('./index.js');

test('health > 50 should return "healthy"', () => {
  const character = { name: 'Mage', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('health between 15 and 50 should return "wounded"', () => {
  const character = { name: 'Mage', health: 30 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('health < 15 should return "critical"', () => {
  const character = { name: 'Mage', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});