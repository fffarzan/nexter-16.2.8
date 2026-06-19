type UserRole = 'admin' | 'moderator' | 'user';

type Hair = {
	color: string;
	type: string;
};

type Coordinates = {
	lat: number;
	lng: number;
};

type Address = {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: Coordinates;
	country: string;
};

type Bank = {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
};

type Company = {
	department: string;
	name: string;
	title: string;
	address: Address;
};

type Crypto = {
	coin: string;
	wallet: string;
	network: string;
};

export type Qouter = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: 'male' | 'female';
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: Hair;
	ip: string;
	address: Address;
	macAddress: string;
	university: string;
	bank: Bank;
	company: Company;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: Crypto;
	role: UserRole;
};

export type QouterProps = {
	qouterId: number;
};

export default async function Qouter({ qouterId }: QouterProps) {
	const data = await fetch(`https://dummyjson.com/users/${qouterId}`);
	const qouter: Qouter = await data.json();

	return <span key={qouter.id}>{qouter.username}</span>;
}
