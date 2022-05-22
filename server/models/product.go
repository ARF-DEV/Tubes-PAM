package model

type Product struct {
	ID          int    `db:"id"`
	Name        string `db:"name"`
	Description string `db:"desc"`
	Harga       int    `db:"harga"`
}
