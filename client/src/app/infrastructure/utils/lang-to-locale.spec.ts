import { langToLocale } from './lang-to-locale';

describe(`langToLocale`, () => {
    it(`uses the Czech locale for the Czech language key`, () => {
        expect(langToLocale(`cs`)).toBe(`cs-CZ`);
    });
});
