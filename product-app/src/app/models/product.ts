export class Product {
	constructor(
		public imageUrl: string,
		public code: string,
		public name: string,
		public price: number,
		public available: boolean,
		public rating: number,
	) { }
}

export const exampleProd: Product[] = [
	{
		imageUrl: 'y8.com',
		code: 'u01',
		name: 'Name 001 a',
		price: 2504.44,
		available: false,
		rating: 2.3,
	},
	{
		imageUrl: 'y9.com',
		code: 'u02',
		name: 'Name 002 b',
		price: 1150.502,
		available: true,
		rating: 3.2,
	},
	{
		imageUrl: 'y10.com',
		code: 'u03',
		name: 'Name 003 a',
		price: 144.42,
		available: false,
		rating: 4.8,
	},
]