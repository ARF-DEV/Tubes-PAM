package repository

import (
	"database/sql"
	"fmt"
	"log"

	schema "github.com/ARF-DEV/Tubes-PAM/server/schema"
)

type ProductRepoInterface interface {
	FetchProduct() ([]schema.ProductInfo, error)
	GetByID(id int) (*schema.ProductDetail, error)
	GetByName(name string) ([]schema.ProductInfo, error)
}

type ProductRepository struct {
	db *sql.DB
}

func NewProductRepo(db *sql.DB) *ProductRepository {
	return &ProductRepository{
		db: db,
	}
}

func (p *ProductRepository) FetchProduct() ([]schema.ProductInfo, error) {
	var sqlStatement string

	sqlStatement = `
		SELECT id, name, price, short_description FROM products;
	`
	rows, err := p.db.Query(sqlStatement)

	if err != nil {
		return nil, err
	}

	var products []schema.ProductInfo
	for rows.Next() {
		var product schema.ProductInfo
		err = rows.Scan(
			&product.ID,
			&product.Name,
			&product.Price,
			&product.ShortDescription,
		)

		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return products, nil
}

func (p *ProductRepository) GetByID(id int) (*schema.ProductDetail, error) {
	var sqlStatement string
	var product schema.ProductDetail

	sqlStatement = `
		SELECT id, name, price, long_description FROM products WHERE id = ?;
	`

	row := p.db.QueryRow(sqlStatement, id)

	err := row.Scan(
		&product.ID,
		&product.Name,
		&product.Price,
		&product.LongDescription,
	)

	if err != nil {
		return nil, err
	}

	return &product, nil
}

func (p *ProductRepository) GetByName(name string) ([]schema.ProductInfo, error) {
	var sqlStatement string

	sqlStatement = `
		SELECT id, name, price, short_description FROM products WHERE name LIKE ?;
	`

	pattern := fmt.Sprintf("%c%s%c", '%', name, '%')
	rows, err := p.db.Query(sqlStatement, pattern)
	log.Println("Pattern :", pattern)
	if err != nil {
		return nil, err
	}

	var products []schema.ProductInfo
	for rows.Next() {
		var product schema.ProductInfo
		err = rows.Scan(
			&product.ID,
			&product.Name,
			&product.Price,
			&product.ShortDescription,
		)

		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return products, nil
}
