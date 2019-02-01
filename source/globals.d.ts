type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;

type FirstArg<T extends any[]> =
	T extends [infer R, ...any[]] ? R :
	T extends [] ? undefined :
	never;

type TailArgs<T extends any[]> = ((...args: T) => any) extends ((
	_: infer First,
	...rest: infer Rest
) => any)
	? T extends any[] ? Rest : ReadonlyArray<Rest[number]>
	: [];

declare const browser: AnyObject;

type AnyObject = Record<string, any>;

declare module 'select-dom' {
	import 'select-dom';

	function select(selector: string, parent?: any): any | null;
	namespace select {
		export function exists(selector: string, parent?: Element): boolean;
		export function all(selector: string, parent?: Element | Element[] | NodeList | DocumentFragment): any[];
	}
	export = select;
}

declare module "webext-options-sync" {
	export default class OptionsSync {
		getAll: <T>() => T;
	}
}


