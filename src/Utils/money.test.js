import { describe, it, expect } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
    it('format 2000 cents as $20.00', () => {
        expect(formatMoney(2000)).toBe("$20.00");
    });

    it('display 2 decimals', () => {
        expect(formatMoney(1290)).toBe("$12.90");
        expect(formatMoney(100)).toBe("$1.00")
    })
});