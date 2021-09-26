// autobind decorator
export function autobind(_: any, _2: string, description: PropertyDescriptor) {
	const originalMethod = description.value;
	const adjustDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	};
	return adjustDescriptor;
}
