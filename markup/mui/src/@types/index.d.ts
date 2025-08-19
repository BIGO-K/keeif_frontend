/** HTMLElement 확장 */
declare type DOMElement = Element | Document | Window;
/** HTMLCollection 확장(document, window 포함) */
declare type DOMCollection = HTMLCollection | NodeList | DOMList;
/** DOM 전체 및 셀렉터 포함(제이쿼리 추가 필요?) */
declare type DOMSelector = DOMElement | DOMCollection | string;
declare interface DOMList extends Array<DOMElement> {
	context?: string;
}
/** HTMLCollection 확장 */
declare type ElementCollection = HTMLCollection | NodeList | ElementList;
declare type ElementSelector = Element | ElementCollection | string;
declare interface ElementList extends Array<HTMLElement> {
	context?: string;
}