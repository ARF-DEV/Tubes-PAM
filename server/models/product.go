package model

type Product struct {
	ID          int    `db:"id" json:"id"`
	Name        string `db:"name" json:"name"`
	Description string `db:"desc" json:"desc"`
	Price       int    `db:"price" json:"price"`
}
