/*
 * action types
 */
export const MINECOIN = 'MINECOIN';
export const BUYCOINS = 'BUYCOINS';
export const SELLCOINS = 'SELLCOINS';

/*
 * action creators
 */
export function mineCoin() {
    return { type: MINECOIN }
}
export function buyCoins(payload) {
    return { type: BUYCOINS, payload }
}
export function sellCoins(payload) {
    return { type: SELLCOINS, payload }
}