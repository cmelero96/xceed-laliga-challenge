import {
  calculatePlayerAge,
  filterPlayersByText,
  normalizeText,
  sortElementsByField,
} from '../../utils';

describe('calculatePlayerAge', () => {
  test('Returns the correct age', () => {
    // These tests would break over time if we hardcode the expected age
    // so instead we check that the age is never lower than the expected
    // result, so that if these tests are run in the future the result may
    // be higher than it is now, but never lower (age can never go down!)
    const mocks = [
      { dateOfBirth: '1990-01-01T00:00:00Z', ageNow: 32 },
      { dateOfBirth: '1900-06-20T00:00:00Z', ageNow: 121 },
      { dateOfBirth: '2014-01-10T00:00:00Z', ageNow: 7 },
      { dateOfBirth: '2020-09-20T00:00:00Z', ageNow: 1 },
      { dateOfBirth: '1965-12-01T00:00:00Z', ageNow: 56 },
    ];
    mocks.forEach((mockData) => {
      expect(calculatePlayerAge(mockData)).toBeGreaterThanOrEqual(
        mockData.ageNow
      );
    });
  });

  test("Doesn't break when the date provided is now", () => {
    const expectFunction = expect(
      calculatePlayerAge({ dateOfBirth: new Date().toISOString() })
    );
    expectFunction.toBe(0);
  });

  test('Returns undefined when the date provided is in the future', () => {
    const expectFunction = expect(
      calculatePlayerAge({ dateOfBirth: '2500-01-01T00:00:00Z' })
    );
    expectFunction.toBeUndefined();
  });

  test('Returns undefined when the date provided has invalid format', () => {
    const expectFunction = expect(calculatePlayerAge({ dateOfBirth: 'test' }));
    expectFunction.toBeUndefined();
  });

  test('Returns undefined when no date is provided', () => {
    const expectFunction = expect(calculatePlayerAge({}));
    expectFunction.toBeUndefined();
  });
});

describe('sortElementsByField', () => {
  test('Returns sorted correctly with a string field', () => {
    const unsorted = [
      { test: 'ab' },
      { test: 'áa' },
      { test: 'Ác' },
      { test: ' ' },
      { test: 'zzz' },
    ];
    const expected = [
      { test: ' ' },
      { test: 'áa' },
      { test: 'ab' },
      { test: 'Ác' },
      { test: 'zzz' },
    ];

    // Non-reversed
    expect(sortElementsByField(unsorted, 'test', false)).toStrictEqual(
      expected
    );
    // Reversed
    expect(sortElementsByField(unsorted, 'test', true)).toStrictEqual(
      expected.reverse()
    );
  });

  test('Places null values at the beginning, or at the end if reversed, in string sortings', () => {
    const unsorted = [{}, { test: 'x' }, {}, { test: 'a' }, {}];
    const expected = [{}, {}, {}, { test: 'a' }, { test: 'x' }];

    // Non-reversed
    expect(sortElementsByField(unsorted, 'test', false)).toStrictEqual(
      expected
    );
    // Reversed
    expect(sortElementsByField(unsorted, 'test', true)).toStrictEqual(
      expected.reverse()
    );
  });

  test('Uses localeCompare when available on strings', () => {
    const unsorted = [{ test: 'a' }, { test: 'b' }];
    const spy = jest.spyOn(String.prototype, 'localeCompare');

    sortElementsByField(unsorted, 'test');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('Returns sorted correctly with a number field', () => {
    const unsorted = [{ test: 6 }, { test: -20 }, { test: 0 }, { test: 77 }];
    const expected = [{ test: -20 }, { test: 0 }, { test: 6 }, { test: 77 }];

    // Non-reversed
    expect(sortElementsByField(unsorted, 'test', false)).toStrictEqual(
      expected
    );
    // Reversed
    expect(sortElementsByField(unsorted, 'test', true)).toStrictEqual(
      expected.reverse()
    );
  });

  test('Places null values at the beginning, or at the end if reversed, in number sortings', () => {
    const unsorted = [{}, { test: 5 }, {}, { test: 8 }, {}, { test: -50 }];
    const expected = [{}, {}, {}, { test: -50 }, { test: 5 }, { test: 8 }];

    // Non-reversed
    expect(sortElementsByField(unsorted, 'test', false)).toStrictEqual(
      expected
    );
    // Reversed
    expect(sortElementsByField(unsorted, 'test', true)).toStrictEqual(
      expected.reverse()
    );
  });

  test('Returns an empty array when provided no elements', () => {
    expect(sortElementsByField([], 'test')).toStrictEqual([]);
  });
});

describe('normalizeText', () => {
  test('Removes accents and diacritics from letters', () => {
    const testString =
      'àÀáÁâÂãÃäÅåÄèÈéÉêëÊËìÌíÍîÎïÏòÒóÓôÔõÕöÖùÙúÚûÛüÜýÝÿŸñÑçÇßØøÆæœ';

    const expected = 'aaaaaaaaaaaaeeeeeeeeiiiiiiiioooooooooouuuuuuuuyyyynncc';
    expect(normalizeText(testString)).toBe(expected);
  });
  test('Removes all non-letter characters, besides spaces that separate words', () => {
    const testString = 'a1234567890  -_*¡!@#$%^&*b()_-={}[]:"<>,.¿?\\/~` c';

    const expected = 'a  b c';
    expect(normalizeText(testString)).toBe(expected);
  });
  test('Returns a trimmed string', () => {
    const testString = ' \n\t\r a \n\t\r ';

    const expected = 'a';
    expect(normalizeText(testString)).toBe(expected);
  });
  test('Returns a lowercased string', () => {
    const testString = 'TEST';

    const expected = 'test';
    expect(normalizeText(testString)).toBe(expected);
  });
});

describe('filterPlayersByText', () => {
  const testPlayers = [{ name: 'foo' }, { name: 'bar' }, { name: 'foobar' }];

  test('Returns the original list if the filter is empty before normalizing', () => {
    const expected = [...testPlayers];
    expect(filterPlayersByText(testPlayers, '')).toStrictEqual(expected);
  });
  test('Returns the original list if the filter is empty after normalizing', () => {
    const expected = [...testPlayers];
    expect(filterPlayersByText(testPlayers, ' !-\n\r\t')).toStrictEqual(
      expected
    );
  });
  test('Filters the players by full name match', () => {
    const expected = [{ name: 'foobar' }];
    expect(filterPlayersByText(testPlayers, 'foobar')).toStrictEqual(expected);
  });
  test('Filters the players by partial match', () => {
    const expected = [{ name: 'foo' }, { name: 'foobar' }];

    const result = filterPlayersByText(testPlayers, 'foo');
    // Check that both expected items are present, but no more, and order doesn't matter
    expect(result).toStrictEqual(expect.arrayContaining(expected));
    expect(result).toHaveLength(expected.length);
  });
  test('Returns an empty list if the original list was empty', () => {
    const expected = [];
    expect(filterPlayersByText([], 'test')).toStrictEqual(expected);
  });
});
