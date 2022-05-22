package repository

import (
	"database/sql"

	model "github.com/ARF-DEV/Tubes-PAM/server/models"
)

type ProductRepoInterface interface {
	FetchProduct() ([]model.Product, error)
	GetByID(id int) (*model.Product, error)
	GetByName(name string) ([]model.Product, error)
}

type ProductRepository struct {
	db *sql.DB
}

func NewProductRepo(db *sql.DB) *ProductRepository {
	return &ProductRepository{
		db: db,
	}
}

func (p *ProductRepository) FetchProduct() ([]model.Product, error) {
	var sqlStatement string

	sqlStatement = `
		SELECT * FROM products;
	`
	rows, err := p.db.Query(sqlStatement)

	if err != nil {
		return nil, err
	}

	var products []model.Product
	for rows.Next() {
		var product model.Product
		err = rows.Scan(
			&product.ID,
			&product.Name,
			&product.Description,
			&product.Price,
		)

		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return products, nil
}

func (p *ProductRepository) GetByID(id int) (*model.Product, error) {
	var sqlStatement string
	var product model.Product

	sqlStatement = `
		SELECT * FROM products WHERE id = ?;
	`

	row := p.db.QueryRow(sqlStatement, id)

	err := row.Scan(
		&product.ID,
		&product.Name,
		&product.Description,
		&product.Price,
	)

	if err != nil {
		return nil, err
	}

	return &product, nil
}

func (p *ProductRepository) GetByName(name string) ([]model.Product, error) {
	var sqlStatement string

	sqlStatement = `
		SELECT * FROM products WHERE name = ?;
	`
	rows, err := p.db.Query(sqlStatement, name)

	if err != nil {
		return nil, err
	}

	var products []model.Product
	for rows.Next() {
		var product model.Product
		err = rows.Scan(
			&product.ID,
			&product.Name,
			&product.Description,
			&product.Price,
		)

		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return products, nil
}
